import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

// Import images
import anxietyPersonImage from "@/assets/anxiety-person.jpg";
import depressionPersonImage from "@/assets/depression-person.jpg";
import onlineTherapyHeroImage from "@/assets/online-therapy-hero.jpg";
import couplesTherapyHeroImage from "@/assets/couples-therapy-hero.jpg";
import teenTherapyHeroImage from "@/assets/teen-therapy-hero.jpg";
import ptsdPersonImage from "@/assets/ptsd-person.jpg";
import cbtTherapyHero from "@/assets/cbt-therapy-hero.jpg";
import emdrTherapyHero from "@/assets/emdr-therapy-hero.jpg";
import groupIndividualTherapyHero from "@/assets/group-individual-therapy-hero.jpg";
import telehealthGeorgiaHero from "@/assets/telehealth-georgia-hero.jpg";
import collegeTherapyHero from "@/assets/college-therapy-hero.jpg";
import postpartumSupportHero from "@/assets/postpartum-support-hero.jpg";
import mensMentalHealthHero from "@/assets/mens-mental-health-hero.jpg";
import seniorTherapyHero from "@/assets/senior-therapy-hero.jpg";
import marriageCounselingHero from "@/assets/marriage-counseling-hero.jpg";
import familyTherapyHero from "@/assets/family-therapy-hero.jpg";
import premaritalCounselingHero from "@/assets/premarital-counseling-hero.jpg";
import workplaceBurnoutHero from "@/assets/workplace-burnout-hero.jpg";
import careerTransitionHero from "@/assets/career-transition-hero.jpg";
import griefTherapyHero from "@/assets/grief-therapy-hero.jpg";
import crisisSupportHero from "@/assets/crisis-support-hero.jpg";
import selfEsteemHero from "@/assets/self-esteem-hero.jpg";
import mindfulnessHero from "@/assets/mindfulness-hero.jpg";
import healthyBoundariesHero from "@/assets/healthy-boundaries-hero.jpg";
import therapyCostHero from "@/assets/therapy-cost-hero.jpg";
import findingTherapistHero from "@/assets/finding-therapist-hero.jpg";

const Blog = () => {
  const [dbPosts, setDbPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      
      if (data && !error) {
        setDbPosts(data);
      }
      setLoading(false);
    };
    
    fetchPosts();
  }, []);

  const staticBlogPosts = [
    {
      id: 1,
      title: "Online Therapy Covered by Insurance: Complete Guide to Affordable Mental Health Care",
      excerpt: "Comprehensive guide to getting online therapy covered by insurance with 9+ major providers. Learn about coverage, copays, and how to start therapy today.",
      category: "Insurance",
      date: "December 21, 2024",
      readTime: "12 min read",
      image: onlineTherapyHeroImage,
      slug: "therapy-online-insurance-coverage"
    },
    {
      id: 2,
      title: "Understanding Anxiety: Signs, Symptoms, and Treatment Options",
      excerpt: "Learn about the different types of anxiety disorders and evidence-based treatment approaches that can help you manage anxiety effectively.",
      category: "Anxiety",
      date: "December 20, 2024",
      readTime: "8 min read",
      image: anxietyPersonImage,
      slug: "understanding-anxiety"
    },
    {
      id: 3,
      title: "Depression in Adults: Breaking the Stigma and Finding Help",
      excerpt: "Explore the reality of adult depression, common misconceptions, and how therapy can provide a path to recovery and healing.",
      category: "Depression",
      date: "December 18, 2024",
      readTime: "6 min read",
      image: depressionPersonImage,
      slug: "depression-adults"
    },
    {
      id: 4,
      title: "The Benefits of Online Therapy: Accessible Mental Health Care",
      excerpt: "Discover how online therapy has revolutionized mental health care, making it more accessible and convenient for everyone.",
      category: "Therapy",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: onlineTherapyHeroImage,
      slug: "benefits-online-therapy"
    },
    {
      id: 5,
      title: "Couples Therapy: Strengthening Relationships Through Communication",
      excerpt: "Learn how couples therapy can help partners improve communication, resolve conflicts, and build stronger relationships.",
      category: "Relationships",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: couplesTherapyHeroImage,
      slug: "couples-therapy-communication"
    },
    {
      id: 6,
      title: "Teen Mental Health: Supporting Adolescents Through Challenging Times",
      excerpt: "Understanding the unique mental health challenges teens face and how therapy can provide crucial support during adolescence.",
      category: "Teen Health",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: teenTherapyHeroImage,
      slug: "teen-mental-health"
    },
    {
      id: 7,
      title: "PTSD Recovery: Healing from Trauma with Professional Support",
      excerpt: "Explore evidence-based treatments for PTSD and how therapy can help individuals process trauma and reclaim their lives.",
      category: "PTSD",
      date: "December 8, 2024",
      readTime: "9 min read",
      image: ptsdPersonImage,
      slug: "ptsd-recovery"
    },
    {
      id: 8,
      title: "Cognitive Behavioral Therapy: How CBT Changes Your Brain",
      excerpt: "Discover the science behind CBT and how this evidence-based therapy approach can rewire thought patterns for lasting change.",
      category: "Therapy",
      date: "January 15, 2025",
      readTime: "10 min read",
      image: cbtTherapyHero,
      slug: "cognitive-behavioral-therapy"
    },
    {
      id: 9,
      title: "EMDR Therapy: Revolutionary Treatment for Trauma and PTSD",
      excerpt: "Learn how Eye Movement Desensitization and Reprocessing (EMDR) helps process traumatic memories and accelerate healing.",
      category: "PTSD",
      date: "January 14, 2025",
      readTime: "11 min read",
      image: emdrTherapyHero,
      slug: "emdr-therapy"
    },
    {
      id: 10,
      title: "Group Therapy vs Individual Therapy: Which Is Right for You?",
      excerpt: "Compare the benefits of group and individual therapy to determine the best therapeutic approach for your mental health journey.",
      category: "Therapy",
      date: "January 13, 2025",
      readTime: "8 min read",
      image: groupIndividualTherapyHero,
      slug: "group-vs-individual-therapy"
    },
    {
      id: 11,
      title: "Telehealth Therapy in Georgia: Complete Guide to Regulations & Coverage",
      excerpt: "Everything you need to know about online therapy in Georgia including regulations, insurance coverage, and getting started.",
      category: "Insurance",
      date: "January 12, 2025",
      readTime: "12 min read",
      image: telehealthGeorgiaHero,
      slug: "telehealth-therapy-georgia"
    },
    {
      id: 12,
      title: "Mental Health Support for College Students: Therapy on Campus",
      excerpt: "Navigate academic stress, relationships, and transitions with specialized mental health support for college students.",
      category: "Teen Health",
      date: "January 11, 2025",
      readTime: "9 min read",
      image: collegeTherapyHero,
      slug: "therapy-college-students"
    },
    {
      id: 13,
      title: "Postpartum Depression: Recognition, Treatment & Support",
      excerpt: "Comprehensive guide to understanding and treating postpartum depression with effective therapeutic interventions.",
      category: "Depression",
      date: "January 10, 2025",
      readTime: "10 min read",
      image: postpartumSupportHero,
      slug: "postpartum-depression"
    },
    {
      id: 14,
      title: "Men's Mental Health: Breaking Barriers to Seeking Help",
      excerpt: "Address the unique mental health challenges men face and why seeking therapy is a sign of strength, not weakness.",
      category: "Therapy",
      date: "January 9, 2025",
      readTime: "8 min read",
      image: mensMentalHealthHero,
      slug: "mens-mental-health"
    },
    {
      id: 15,
      title: "Senior Mental Health: Therapy for Older Adults & Medicare Coverage",
      excerpt: "Essential guide to mental health care for seniors including Medicare coverage, common challenges, and treatment options.",
      category: "Therapy",
      date: "January 8, 2025",
      readTime: "11 min read",
      image: seniorTherapyHero,
      slug: "senior-mental-health"
    },
    {
      id: 16,
      title: "Signs You Need Marriage Counseling: When to Seek Help",
      excerpt: "Recognize the warning signs that indicate marriage counseling could strengthen your relationship before problems escalate.",
      category: "Relationships",
      date: "January 7, 2025",
      readTime: "7 min read",
      image: marriageCounselingHero,
      slug: "marriage-counseling-signs"
    },
    {
      id: 17,
      title: "Family Therapy: Improving Communication & Resolving Conflicts",
      excerpt: "Learn how family therapy can help improve communication, resolve conflicts, and strengthen family bonds.",
      category: "Relationships",
      date: "January 6, 2025",
      readTime: "9 min read",
      image: familyTherapyHero,
      slug: "family-therapy-guide"
    },
    {
      id: 18,
      title: "Premarital Counseling: Building a Strong Foundation for Marriage",
      excerpt: "Discover how premarital counseling prepares couples for marriage with better communication and conflict resolution skills.",
      category: "Relationships",
      date: "January 5, 2025",
      readTime: "8 min read",
      image: premaritalCounselingHero,
      slug: "premarital-counseling"
    },
    {
      id: 19,
      title: "Workplace Stress & Burnout: How Therapy Can Help Your Career",
      excerpt: "Comprehensive guide to managing workplace stress and burnout through therapy to improve work-life balance.",
      category: "Therapy",
      date: "January 4, 2025",
      readTime: "10 min read",
      image: workplaceBurnoutHero,
      slug: "workplace-stress-burnout"
    },
    {
      id: 20,
      title: "Career Transition Anxiety: Managing Stress During Job Changes",
      excerpt: "Navigate career transitions with confidence using therapeutic strategies to manage anxiety and stress during job changes.",
      category: "Anxiety",
      date: "January 3, 2025",
      readTime: "8 min read",
      image: careerTransitionHero,
      slug: "career-transition-anxiety"
    },
    {
      id: 21,
      title: "Grief Therapy: Healing from Loss with Professional Support",
      excerpt: "Understand the grieving process and how therapy can help you process loss and find meaning after bereavement.",
      category: "Therapy",
      date: "January 2, 2025",
      readTime: "11 min read",
      image: griefTherapyHero,
      slug: "grief-therapy-healing"
    },
    {
      id: 22,
      title: "Suicidal Thoughts: Getting Help & Crisis Resources",
      excerpt: "Critical information on recognizing warning signs, getting immediate help, and supporting someone with suicidal thoughts.",
      category: "Crisis",
      date: "January 1, 2025",
      readTime: "9 min read",
      image: crisisSupportHero,
      slug: "suicidal-thoughts-help"
    },
    {
      id: 23,
      title: "Building Self-Esteem: Therapy Techniques for Greater Confidence",
      excerpt: "Learn evidence-based therapy techniques to build self-esteem and develop lasting confidence in your abilities.",
      category: "Therapy",
      date: "December 31, 2024",
      readTime: "10 min read",
      image: selfEsteemHero,
      slug: "building-self-esteem"
    },
    {
      id: 24,
      title: "Mindfulness-Based Therapy: Science-Backed Techniques for Mental Wellness",
      excerpt: "Explore mindfulness-based therapeutic approaches including MBSR, MBCT, and practical techniques for daily life.",
      category: "Therapy",
      date: "December 30, 2024",
      readTime: "12 min read",
      image: mindfulnessHero,
      slug: "mindfulness-therapy"
    },
    {
      id: 25,
      title: "Setting Healthy Boundaries: A Therapist's Guide to Saying No",
      excerpt: "Learn how to set healthy boundaries in relationships, work, and family with practical communication scripts.",
      category: "Relationships",
      date: "December 29, 2024",
      readTime: "8 min read",
      image: healthyBoundariesHero,
      slug: "setting-healthy-boundaries"
    },
    {
      id: 26,
      title: "How Much Does Therapy Cost? Insurance, Sliding Scale & Payment Options",
      excerpt: "Complete guide to therapy costs in Georgia including insurance coverage, sliding scale fees, and affordable options.",
      category: "Insurance",
      date: "December 28, 2024",
      readTime: "9 min read",
      image: therapyCostHero,
      slug: "therapy-cost-payment-options-guide"
    },
    {
      id: 27,
      title: "Finding the Right Therapist: Your Complete Matching Guide",
      excerpt: "Expert guide to finding the right therapist including credentials, specialties, therapeutic fit, and consultation questions.",
      category: "Therapy",
      date: "December 27, 2024",
      readTime: "11 min read",
      image: findingTherapistHero,
      slug: "finding-right-therapist-guide"
    }
  ];

  // Combine database posts with static posts
  const allPosts = [
    ...dbPosts.map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.meta_description || post.excerpt || post.content?.substring(0, 150) + '...',
      category: post.category || 'Therapy',
      date: new Date(post.published_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: `${Math.ceil(post.content?.length / 1000) || 5} min read`,
      image: post.featured_image || post.image_url || staticBlogPosts[0].image,
      slug: post.slug,
      isAiGenerated: post.ai_generated
    })),
    ...staticBlogPosts
  ];

  const categories = [
    "All",
    "Insurance",
    "Anxiety",
    "Depression", 
    "Therapy",
    "Relationships",
    "Teen Health",
    "PTSD",
    "Crisis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Mental Health Blog - Expert Insights & Resources | Colorado Healing Center"
        description="Stay informed with expert mental health insights, tips, and resources. Latest research and practical advice for your mental health journey."
        keywords="mental health blog, therapy insights, depression help, anxiety resources, mental wellness tips"
      />
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
          {loading && <p className="col-span-full text-center">Loading articles...</p>}
          {allPosts.map((post) => (
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
                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
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
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
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