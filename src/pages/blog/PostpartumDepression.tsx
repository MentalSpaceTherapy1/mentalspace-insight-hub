import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PostpartumDepression = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Postpartum Depression: Signs, Treatment & Support for New Mothers",
    "description": "Comprehensive guide to understanding postpartum depression, recognizing symptoms, treatment options, and finding support as a new mother.",
    "author": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chctherapy.com/chc-logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <SEOHead
        title="Postpartum Depression: Signs, Treatment & Support | CHC Therapy"
        description="Expert guide to postpartum depression covering symptoms, treatment options, medication safety, and maternal mental health support in Georgia."
        keywords="postpartum depression treatment, PPD symptoms, perinatal mental health, postpartum therapy, new mother depression"
        canonicalUrl="https://chctherapy.com/blog/postpartum-depression-treatment-guide"
        ogTitle="Postpartum Depression: Complete Treatment Guide for New Mothers"
        ogDescription="Comprehensive resource on recognizing and treating postpartum depression. Learn about symptoms, therapy options, and support resources."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={structuredData}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Postpartum Depression: Signs, Treatment & Support for New Mothers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding and overcoming postpartum depression with professional support
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <span>Published: January 15, 2025</span>
                <span>•</span>
                <span>14 min read</span>
                <span>•</span>
                <span>Maternal Mental Health</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Becoming a mother is often portrayed as one of life's most joyful experiences. While motherhood brings immense love and fulfillment, it can also be accompanied by unexpected emotional challenges. Postpartum depression (PPD) affects approximately 1 in 7 new mothers, making it one of the most common complications of childbirth.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              If you're experiencing depression after having a baby, it's crucial to understand that this isn't your fault, it doesn't make you a bad mother, and most importantly—it's treatable. With proper support and treatment, you can recover fully and enjoy motherhood.
            </p>
            <p className="text-lg leading-relaxed">
              This comprehensive guide will help you understand postpartum depression, recognize the symptoms, learn about treatment options, and find the support you need during this challenging time.
            </p>
          </section>

          {/* Understanding PPD */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Postpartum Depression</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">What Is Postpartum Depression?</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Postpartum depression is a mood disorder that can affect women after childbirth. It involves feelings of extreme sadness, anxiety, and exhaustion that can make it difficult to complete daily care activities for yourself and your baby.
                </p>
                <p className="text-lg leading-relaxed">
                  PPD is different from the "baby blues," which affects up to 80% of new mothers. The baby blues involve mood swings, crying spells, anxiety, and difficulty sleeping, but these symptoms are mild and typically resolve within two weeks. Postpartum depression is more severe, lasts longer, and requires treatment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">When Does Postpartum Depression Occur?</h3>
                <p className="text-lg leading-relaxed mb-4">
                  While called "postpartum" depression, this condition can actually begin:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><strong>During pregnancy</strong> (called perinatal or antenatal depression)</li>
                  <li><strong>Within the first few weeks after delivery</strong> (most common)</li>
                  <li><strong>Anytime during the first year after giving birth</strong></li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Some women don't experience symptoms until several months postpartum, especially when hormones shift after weaning from breastfeeding.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">What Causes Postpartum Depression?</h3>
                <p className="text-lg leading-relaxed mb-4">
                  PPD doesn't have a single cause. Rather, it results from a combination of physical, emotional, and lifestyle factors:
                </p>
                
                <h4 className="text-xl font-semibold mb-3 text-foreground">Physical Factors:</h4>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                  <li><strong>Hormonal changes:</strong> Dramatic drops in estrogen and progesterone after delivery</li>
                  <li><strong>Thyroid hormone changes:</strong> Postpartum thyroiditis can mimic depression symptoms</li>
                  <li><strong>Sleep deprivation:</strong> Chronic lack of sleep affects mood regulation</li>
                  <li><strong>Physical recovery:</strong> Pain, exhaustion from labor and delivery</li>
                </ul>

                <h4 className="text-xl font-semibold mb-3 text-foreground">Emotional and Psychological Factors:</h4>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                  <li>Overwhelmed by new responsibilities and lifestyle changes</li>
                  <li>Loss of identity and independence</li>
                  <li>Anxiety about your ability to care for the baby</li>
                  <li>Feelings of being less attractive</li>
                  <li>Previous history of depression or anxiety</li>
                  <li>Difficult pregnancy or traumatic birth experience</li>
                </ul>

                <h4 className="text-xl font-semibold mb-3 text-foreground">Social and Lifestyle Factors:</h4>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Lack of support from partner, family, or friends</li>
                  <li>Financial stress or employment concerns</li>
                  <li>Relationship problems with partner</li>
                  <li>Single parenthood or feeling isolated</li>
                  <li>Complications with the baby's health</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms */}
          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Signs and Symptoms of Postpartum Depression</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Postpartum depression symptoms can range from mild to severe and may include:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Emotional Symptoms:</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Persistent sadness, hopelessness, or emptiness</li>
                  <li>Severe mood swings and irritability</li>
                  <li>Overwhelming anxiety or panic attacks</li>
                  <li>Excessive crying without clear reason</li>
                  <li>Feeling disconnected from your baby</li>
                  <li>Lack of joy or interest in activities you used to enjoy</li>
                  <li>Feeling like a bad mother or that you're failing</li>
                  <li>Thoughts of harming yourself or your baby</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Physical Symptoms:</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Severe fatigue or loss of energy</li>
                  <li>Changes in appetite (eating much more or less than usual)</li>
                  <li>Sleep disturbances (insomnia or sleeping too much)</li>
                  <li>Physical aches and pains</li>
                  <li>Reduced sex drive</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Behavioral Symptoms:</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Withdrawing from family and friends</li>
                  <li>Difficulty bonding with your baby</li>
                  <li>Loss of concentration or inability to make decisions</li>
                  <li>Feeling worthless or guilty</li>
                  <li>In severe cases, thoughts of suicide or harming the baby</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-lg font-semibold mb-2">⚠️ Emergency Warning Signs</p>
              <p className="text-lg mb-2">
                Seek immediate help if you experience:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-lg">
                <li>Thoughts of harming yourself or your baby</li>
                <li>Hallucinations or delusions</li>
                <li>Severe confusion or inability to care for your baby</li>
                <li>Rapid mood changes or extreme agitation</li>
              </ul>
              <p className="text-lg mt-4 font-semibold">
                Call 988 (Suicide & Crisis Lifeline) or go to the nearest emergency room immediately.
              </p>
            </div>
          </section>

          {/* Baby Blues vs PPD */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Baby Blues vs. Postpartum Depression: What's the Difference?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-4 text-left">Characteristic</th>
                    <th className="border p-4 text-left">Baby Blues</th>
                    <th className="border p-4 text-left">Postpartum Depression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">Timing</td>
                    <td className="border p-4">Within 2-3 days after delivery</td>
                    <td className="border p-4">Can start anytime in first year</td>
                  </tr>
                  <tr className="bg-accent/5">
                    <td className="border p-4 font-semibold">Duration</td>
                    <td className="border p-4">Lasts up to 2 weeks</td>
                    <td className="border p-4">Lasts months if untreated</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Severity</td>
                    <td className="border p-4">Mild symptoms</td>
                    <td className="border p-4">Moderate to severe symptoms</td>
                  </tr>
                  <tr className="bg-accent/5">
                    <td className="border p-4 font-semibold">Impact</td>
                    <td className="border p-4">Can still function normally</td>
                    <td className="border p-4">Interferes with daily activities</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Treatment</td>
                    <td className="border p-4">Rest and support usually sufficient</td>
                    <td className="border p-4">Requires professional treatment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Treatment Options for Postpartum Depression</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Postpartum depression is highly treatable. Most women benefit from a combination of therapy, support, and in some cases, medication. The key is seeking help early.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">1. Psychotherapy (Talk Therapy)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Therapy is often the first-line treatment for postpartum depression:
                </p>
                
                <h4 className="text-xl font-semibold mb-3 text-foreground">Cognitive Behavioral Therapy (CBT):</h4>
                <p className="text-lg leading-relaxed mb-4">
                  CBT helps you identify and change negative thought patterns and behaviors. It's highly effective for postpartum depression and can provide relief within 12-16 weeks.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-foreground">Interpersonal Therapy (IPT):</h4>
                <p className="text-lg leading-relaxed mb-4">
                  IPT focuses on improving relationships and communication patterns, which can be particularly helpful as you adjust to motherhood and navigate changing relationships.
                </p>

                <p className="text-lg leading-relaxed">
                  Both individual and group therapy can be beneficial. Many women find comfort in connecting with other new mothers experiencing similar challenges.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">2. Medication</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Antidepressant medications can be very effective for moderate to severe PPD:
                </p>
                
                <h4 className="text-xl font-semibold mb-3 text-foreground">SSRIs (Selective Serotonin Reuptake Inhibitors):</h4>
                <p className="text-lg leading-relaxed mb-4">
                  Medications like sertraline (Zoloft) and fluoxetine (Prozac) are commonly prescribed and considered safe during breastfeeding. Only small amounts pass into breast milk, and benefits typically outweigh risks.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-foreground">Zuranolone (Zurzuvae):</h4>
                <p className="text-lg leading-relaxed mb-4">
                  This is a newer FDA-approved medication specifically for postpartum depression. It works quickly (within days) and is taken for just 14 days. However, you cannot breastfeed while taking this medication.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-foreground">Important Considerations:</h4>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Always discuss breastfeeding plans with your doctor</li>
                  <li>Medications typically take 2-4 weeks to show full effect</li>
                  <li>Don't stop medication abruptly—work with your doctor on any changes</li>
                  <li>Treatment usually continues for at least 6-12 months</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">3. Lifestyle and Self-Care Strategies</h3>
                <p className="text-lg leading-relaxed mb-4">
                  While not substitutes for professional treatment, these strategies support recovery:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><strong>Rest whenever possible:</strong> Sleep when the baby sleeps</li>
                  <li><strong>Eat nutritious meals:</strong> Focus on whole foods, omega-3 fatty acids</li>
                  <li><strong>Exercise:</strong> Even a 10-minute walk can boost mood</li>
                  <li><strong>Ask for help:</strong> Accept assistance with baby care and household tasks</li>
                  <li><strong>Connect with others:</strong> Join new mom groups or online communities</li>
                  <li><strong>Limit alcohol:</strong> It can worsen depression symptoms</li>
                  <li><strong>Be patient with yourself:</strong> Recovery takes time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">4. Partner and Family Support</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Involving your partner or family members in treatment can improve outcomes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Couples counseling to improve communication and support</li>
                  <li>Educating family about PPD to reduce stigma</li>
                  <li>Coordinating care responsibilities to allow mother rest and treatment time</li>
                  <li>Partner screening for postpartum depression (partners can experience it too)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Finding Support in Georgia */}
          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Finding Postpartum Depression Support in Georgia</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Screening and Diagnosis</h3>
                <p className="text-lg leading-relaxed mb-4">
                  In Georgia, the Edinburgh Postnatal Depression Scale (EPDS) is commonly used to screen for postpartum depression. Your OB-GYN or pediatrician should screen you at postpartum visits. Don't hesitate to request screening if it's not offered.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Perinatal Mental Health Specialists in Georgia</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Coping and Healing Counseling offers specialized treatment for postpartum depression throughout Georgia:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Therapists trained in perinatal mental health</li>
                  <li>Online therapy options for convenience with newborn care</li>
                  <li>Evidence-based treatments (CBT and IPT)</li>
                  <li>Flexible scheduling including evening appointments</li>
                  <li>Coordination with your OB-GYN or primary care provider</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Georgia Resources and Support Groups</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><strong>Postpartum Support International (PSI) Georgia:</strong> Support groups and helpline (1-800-944-4773)</li>
                  <li><strong>La Leche League Georgia:</strong> Breastfeeding support groups that also address maternal mental health</li>
                  <li><strong>Georgia Perinatal Quality Collaborative:</strong> Resources for maternal health</li>
                  <li><strong>Local hospital support groups:</strong> Many Georgia hospitals offer free postpartum support groups</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Insurance Coverage</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Under the Affordable Care Act, most insurance plans in Georgia cover mental health services, including postpartum depression treatment:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Prenatal and postpartum depression screening is covered without copay</li>
                  <li>Therapy sessions are covered like other mental health services</li>
                  <li>Medications are typically covered with standard prescription copays</li>
                </ul>
              </div>
            </div>
          </section>

          {/* For Partners */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">For Partners: How to Support Someone with Postpartum Depression</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              If your partner is experiencing postpartum depression, your support is crucial to her recovery:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">1. Educate Yourself</h3>
                <p className="text-lg leading-relaxed">
                  Learn about postpartum depression to understand what she's experiencing isn't her fault or a reflection of her love for the baby.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">2. Listen Without Judgment</h3>
                <p className="text-lg leading-relaxed">
                  Let her express her feelings without trying to "fix" everything or minimize her experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">3. Help with Practical Tasks</h3>
                <p className="text-lg leading-relaxed">
                  Take on baby care, household chores, or arrange for help. Ensure she gets time to rest and attend therapy appointments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4. Encourage Professional Help</h3>
                <p className="text-lg leading-relaxed">
                  Support her in seeking treatment. Offer to help schedule appointments or attend sessions with her if she wants.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5. Monitor for Warning Signs</h3>
                <p className="text-lg leading-relaxed">
                  Watch for symptoms worsening or any thoughts of self-harm. Don't hesitate to seek emergency help if needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">6. Take Care of Yourself</h3>
                <p className="text-lg leading-relaxed">
                  Supporting someone with PPD is emotionally demanding. Seek your own support through friends, family, or counseling. Partners can experience postpartum depression too.
                </p>
              </div>
            </div>
          </section>

          {/* Prognosis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Recovery and Long-Term Outlook</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              The good news is that postpartum depression is highly treatable, and most women who receive appropriate care recover completely:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
              <li>With treatment, symptoms typically improve within 2-3 months</li>
              <li>The earlier treatment begins, the faster recovery tends to be</li>
              <li>Combination treatment (therapy + medication when needed) is most effective for moderate to severe PPD</li>
              <li>Most women who experience PPD do not have it with subsequent pregnancies, though the risk is higher</li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              It's important to continue treatment even after symptoms improve to prevent relapse. Work with your mental health provider to determine the right timeline for tapering treatment.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Planning for Future Pregnancies</h3>
            <p className="text-lg leading-relaxed">
              If you've had postpartum depression and are considering another pregnancy, discuss preventive strategies with your mental health provider and OB-GYN. Early intervention and monitoring can help prevent or minimize PPD in subsequent pregnancies.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">You Deserve Support and Treatment</h2>
            <p className="text-lg leading-relaxed mb-6">
              Postpartum depression is not a character flaw, a sign of weakness, or something you can simply "snap out of." It's a medical condition that requires treatment, just like any other illness. The most important step you can take is reaching out for help.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With proper support and treatment, you can overcome postpartum depression and fully enjoy your experience as a mother. Your mental health matters—not just for yourself, but for your baby and your family.
            </p>
            <p className="text-lg leading-relaxed">
              Remember: Seeking help is a sign of strength and love for your baby. You don't have to struggle alone.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Support for Postpartum Depression Today</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling specializes in perinatal mental health care. Our compassionate therapists understand what you're going through and can help you recover.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/conditions/perinatal-mood-therapy-ga">
                <Button size="lg" variant="secondary">
                  Learn About Perinatal Therapy
                </Button>
              </Link>
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/depression-adults" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    Recognizing and Treating Depression in Adults
                  </h3>
                  <p className="text-muted-foreground">
                    Understanding major depression symptoms and when to seek help.
                  </p>
                </div>
              </Link>
              <Link to="/blog/understanding-anxiety" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    Understanding Anxiety: Symptoms & Treatment
                  </h3>
                  <p className="text-muted-foreground">
                    Learn about anxiety disorders and effective treatment options.
                  </p>
                </div>
              </Link>
              <Link to="/blog/benefits-online-therapy" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    The Benefits of Online Therapy
                  </h3>
                  <p className="text-muted-foreground">
                    Discover how telehealth makes therapy accessible for new mothers.
                  </p>
                </div>
              </Link>
              <Link to="/conditions/perinatal-mood-therapy-ga" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    Perinatal Mood Therapy in Georgia
                  </h3>
                  <p className="text-muted-foreground">
                    Specialized mental health services for pregnant and postpartum women.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PostpartumDepression;