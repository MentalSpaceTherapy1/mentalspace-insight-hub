import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  FileText, 
  Video, 
  Link, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Eye 
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
  created_at: string;
}

interface Resource {
  id: string;
  title: string;
  description?: string;
  content?: string;
  resource_type: 'article' | 'video' | 'pdf' | 'link';
  resource_url?: string;
  category?: string;
  tags?: string[];
  status: 'draft' | 'published' | 'archived';
  view_count: number;
  created_at: string;
}

const ContentManager = () => {
  const [blogPosts] = useState<BlogPost[]>([]);
  const [resources] = useState<Resource[]>([]);
  const [selectedContent, setSelectedContent] = useState<BlogPost | Resource | null>(null);
  const [contentForm, setContentForm] = useState({
    title: '',
    content: '',
    status: 'draft' as 'draft' | 'published' | 'archived',
    type: 'blog' as 'blog' | 'resource',
  });

  const handleCreateContent = () => {
    // Implementation for creating new content
    console.log('Creating new content:', contentForm);
  };

  const handleUpdateContent = (id: string) => {
    // Implementation for updating content
    console.log('Updating content:', id);
  };

  const handleDeleteContent = (id: string) => {
    // Implementation for deleting content
    console.log('Deleting content:', id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'default';
      case 'draft':
        return 'secondary';
      case 'archived':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Content Management</h2>
          <p className="text-muted-foreground">
            Manage blog posts, resources, and other content
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Content</DialogTitle>
              <DialogDescription>
                Add a new blog post or resource to your website
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Content Type</Label>
                  <Select
                    value={contentForm.type}
                    onValueChange={(value) =>
                      setContentForm(prev => ({ ...prev, type: value as 'blog' | 'resource' }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="resource">Resource</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select
                    value={contentForm.status}
                    onValueChange={(value) =>
                      setContentForm(prev => ({ ...prev, status: value as 'draft' | 'published' | 'archived' }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={contentForm.title}
                  onChange={(e) =>
                    setContentForm(prev => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="Enter content title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={contentForm.content}
                  onChange={(e) =>
                    setContentForm(prev => ({ ...prev, content: e.target.value }))
                  }
                  placeholder="Enter content body"
                  rows={8}
                />
              </div>
              
              <Button onClick={handleCreateContent} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Create Content
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="blog" className="space-y-4">
        <TabsList>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts</CardTitle>
              <CardDescription>
                Manage your blog posts and articles
              </CardDescription>
            </CardHeader>
            <CardContent>
              {blogPosts.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No blog posts yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Create your first blog post to get started
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Blog Post
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{post.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Created: {new Date(post.created_at).toLocaleDateString()}
                          {post.published_at && ` • Published: ${new Date(post.published_at).toLocaleDateString()}`}
                        </p>
                        <Badge variant={getStatusColor(post.status)} className="mt-2">
                          {post.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteContent(post.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>
                Manage educational resources and materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              {resources.length === 0 ? (
                <div className="text-center py-8">
                  <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No resources yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Add your first resource to help users learn
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Resource
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {resources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {resource.resource_type === 'video' && <Video className="h-4 w-4" />}
                          {resource.resource_type === 'article' && <FileText className="h-4 w-4" />}
                          {resource.resource_type === 'link' && <Link className="h-4 w-4" />}
                          <h4 className="font-medium">{resource.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant={getStatusColor(resource.status)}>
                            {resource.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {resource.view_count} views
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteContent(resource.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManager;