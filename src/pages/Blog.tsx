import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Anxiety: Signs, Symptoms, and Treatment Options",
      excerpt: "Learn about the different types of anxiety disorders and evidence-based treatment approaches that can help you manage anxiety effectively.",
      category: "Anxiety",
      date: "December 20, 2024",
      readTime: "8 min read",
      image: "/src/assets/anxiety-person.jpg"
    },
    {
      id: 2,
      title: "Depression in Adults: Breaking the Stigma and Finding Help",
      excerpt: "Explore the reality of adult depression, common misconceptions, and how therapy can provide a path to recovery and healing.",
      category: "Depression",
      date: "December 18, 2024",
      readTime: "6 min read",
      image: "/src/assets/depression-person.jpg"
    },
    {
      id: 3,
      title: "The Benefits of Online Therapy: Accessible Mental Health Care",
      excerpt: "Discover how online therapy has revolutionized mental health care, making it more accessible and convenient for everyone.",
      category: "Therapy",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "/src/assets/online-therapy-hero.jpg"
    },
    {
      id: 4,
      title: "Couples Therapy: Strengthening Relationships Through Communication",
      excerpt: "Learn how couples therapy can help partners improve communication, resolve conflicts, and build stronger relationships.",
      category: "Relationships",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "/src/assets/couples-therapy-hero.jpg"
    },
    {
      id: 5,
      title: "Teen Mental Health: Supporting Adolescents Through Challenging Times",
      excerpt: "Understanding the unique mental health challenges teens face and how therapy can provide crucial support during adolescence.",
      category: "Teen Health",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "/src/assets/teen-therapy-hero.jpg"
    },
    {
      id: 6,
      title: "PTSD Recovery: Healing from Trauma with Professional Support",
      excerpt: "Explore evidence-based treatments for PTSD and how therapy can help individuals process trauma and reclaim their lives.",
      category: "PTSD",
      date: "December 8, 2024",
      readTime: "9 min read",
      image: "/src/assets/ptsd-person.jpg"
    }
  ];

  const categories = [
    "All",
    "Anxiety",
    "Depression", 
    "Therapy",
    "Relationships",
    "Teen Health",
    "PTSD"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mental Health Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, tips, and resources for your mental health journey. 
            Stay informed with the latest research and practical advice.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest mental health insights and resources.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-input rounded-md flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take the first step towards better mental health with professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/therapist-matching">Request an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/mental-health-tests">Take a Mental Health Test</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;