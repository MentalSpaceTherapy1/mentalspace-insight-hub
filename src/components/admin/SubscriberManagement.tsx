import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Mail, User, Edit } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Subscriber {
  id: string;
  email: string;
  full_name: string | null;
  is_active: boolean;
  subscribed_at: string;
}

const SubscriberManagement = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingSubscribers, setFetchingSubscribers] = useState(true);
  const [editingSubscriber, setEditingSubscriber] = useState<Subscriber | null>(null);
  const [editEmail, setEditEmail] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('is_active', true)
        .order('subscribed_at', { ascending: false });

      if (error) throw error;

      setSubscribers(data || []);
    } catch (error: any) {
      console.error('Error fetching subscribers:', error);
      toast.error('Failed to load subscribers');
    } finally {
      setFetchingSubscribers(false);
    }
  };

  const addSubscriber = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);
    try {
      const fullName = `${firstName} ${lastName}`.trim() || null;
      
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ 
          email, 
          full_name: fullName,
          is_active: true 
        });

      if (error) {
        if (error.code === '23505') {
          toast.error('This email is already subscribed');
        } else {
          throw error;
        }
        return;
      }

      toast.success('Subscriber added successfully!');
      setEmail("");
      setFirstName("");
      setLastName("");
      fetchSubscribers();
    } catch (error: any) {
      console.error('Error adding subscriber:', error);
      toast.error('Failed to add subscriber: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeSubscriber = async (id: string) => {
    if (!confirm('Are you sure you want to remove this subscriber?')) return;

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ is_active: false })
        .eq('id', id);

      if (error) throw error;

      toast.success('Subscriber removed successfully');
      fetchSubscribers();
    } catch (error: any) {
      console.error('Error removing subscriber:', error);
      toast.error('Failed to remove subscriber');
    }
  };

  const startEditSubscriber = (subscriber: Subscriber) => {
    setEditingSubscriber(subscriber);
    setEditEmail(subscriber.email);
    const nameParts = subscriber.full_name?.split(' ') || [];
    setEditFirstName(nameParts[0] || '');
    setEditLastName(nameParts.slice(1).join(' ') || '');
  };

  const cancelEdit = () => {
    setEditingSubscriber(null);
    setEditEmail("");
    setEditFirstName("");
    setEditLastName("");
  };

  const updateSubscriber = async () => {
    if (!editingSubscriber || !editEmail) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);
    try {
      const fullName = `${editFirstName} ${editLastName}`.trim() || null;
      
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ 
          email: editEmail, 
          full_name: fullName 
        })
        .eq('id', editingSubscriber.id);

      if (error) {
        if (error.code === '23505') {
          toast.error('This email is already subscribed');
        } else {
          throw error;
        }
        return;
      }

      toast.success('Subscriber updated successfully!');
      cancelEdit();
      fetchSubscribers();
    } catch (error: any) {
      console.error('Error updating subscriber:', error);
      toast.error('Failed to update subscriber: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Add New Subscriber</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name (Optional)</Label>
            <Input
              id="firstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name (Optional)</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={addSubscriber} disabled={loading} className="w-full md:w-auto">
          {loading ? 'Adding...' : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Add Subscriber
            </>
          )}
        </Button>
        <p className="text-sm text-gray-600 mt-4">
          📧 Weekly Schedule: Newsletters are automatically sent every Monday at 9:00 AM to all active subscribers
        </p>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Active Subscribers ({subscribers.length})</h3>
        </div>

        {fetchingSubscribers ? (
          <p className="text-center text-gray-500 py-8">Loading subscribers...</p>
        ) : subscribers.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No active subscribers yet</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Subscribed</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        {subscriber.full_name || 'N/A'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {subscriber.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditSubscriber(subscriber);
                          }}
                          className="hover:bg-primary/10"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSubscriber(subscriber.id);
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      {editingSubscriber && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Edit Subscriber</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="editFirstName">First Name</Label>
              <Input
                id="editFirstName"
                placeholder="John"
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="editLastName">Last Name</Label>
              <Input
                id="editLastName"
                placeholder="Doe"
                value={editLastName}
                onChange={(e) => setEditLastName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="editEmail">Email Address *</Label>
              <Input
                id="editEmail"
                type="email"
                placeholder="john.doe@example.com"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={updateSubscriber} disabled={loading}>
              {loading ? 'Updating...' : 'Save Changes'}
            </Button>
            <Button variant="outline" onClick={cancelEdit} disabled={loading}>
              Cancel
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SubscriberManagement;
