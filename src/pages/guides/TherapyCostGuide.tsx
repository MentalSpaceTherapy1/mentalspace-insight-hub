import { Link } from 'react-router-dom';
import PillarPageTemplate from '@/components/PillarPageTemplate';

const TherapyCostGuide = () => {
  return (
    <PillarPageTemplate
      title="How to Pay for Therapy: A Complete Guide to Costs and Insurance"
      subtitle="Everything you need to know about therapy costs, insurance coverage, Medicaid options, and how to make mental health care affordable."
      description="Complete guide to therapy costs. Learn about insurance coverage, Medicaid options, self-pay rates, and how to make mental health care affordable in Georgia."
      canonicalUrl="https://chctherapy.com/guides/therapy-cost"
      publishedDate="2025-01-15"
      updatedDate="2025-01-15"
      readTime={14}
      keywords="therapy cost, how much does therapy cost, insurance for therapy, Medicaid therapy Georgia, affordable therapy, mental health insurance coverage"
      relatedServices={[
        { title: "Insurance Information", url: "/insurance" },
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Get Started", url: "/therapist-matching" }
      ]}
      relatedArticles={[
        { title: "Therapy Cost & Payment Options", url: "/blog/therapy-cost-payment-options-guide" },
        { title: "Insurance Coverage for Online Therapy", url: "/blog/therapy-online-insurance-coverage" }
      ]}
    >
      {/* Section 1: How Much Does Therapy Cost? */}
      <section className="mb-12">
        <h2 id="how-much-does-therapy-cost" className="text-3xl font-bold text-foreground mb-6">How Much Does Therapy Cost?</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          One of the most common questions people have when considering therapy is "How much will it cost?" The answer varies widely depending on several factors, but understanding your options can help you find affordable care.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Typical therapy costs without insurance:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Private practice therapists: $100-$250+ per session</li>
          <li>Therapists in higher cost-of-living areas: $150-$300+ per session</li>
          <li>Specialized therapists (trauma, EMDR): May charge premium rates</li>
          <li>Psychiatrists: $200-$500+ for initial evaluation, $100-$300 for follow-ups</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">With insurance:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>In-network copays: Typically $0-$50 per session</li>
          <li>Out-of-network: Higher out-of-pocket costs, but some coverage after deductible</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">At Coping and Healing Counseling:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Self-pay rate: $75 per week (minimum 4 sessions)</li>
          <li>Insurance: Most major plans accepted with typical copays</li>
          <li>Georgia Medicaid: Accepted with little to no cost to you</li>
        </ul>

        <p className="text-lg text-muted-foreground">
          The cost of therapy is an investment in your wellbeing. Many people find that the benefits—improved relationships, better work performance, reduced medical costs, and better quality of life—far outweigh the financial investment.
        </p>
      </section>

      {/* Section 2: Does Insurance Cover Therapy? */}
      <section className="mb-12">
        <h2 id="does-insurance-cover-therapy" className="text-3xl font-bold text-foreground mb-6">Does Insurance Cover Therapy?</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          Most health insurance plans provide coverage for mental health services, though the specifics vary by plan.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">What federal law requires:</h3>
        <p className="text-muted-foreground mb-6">
          The Mental Health Parity and Addiction Equity Act requires most insurance plans to cover mental health services at the same level as physical health services. This means if your plan covers doctor visits with a copay, it should cover therapy visits similarly.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">What's typically covered:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Individual therapy sessions</li>
          <li>Couples and family therapy (often, but not always)</li>
          <li>Psychiatric evaluations and medication management</li>
          <li>Group therapy</li>
          <li>Psychological testing (sometimes with pre-authorization)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">What affects your coverage:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li><strong>Your specific plan:</strong> Coverage varies by plan, even within the same insurance company</li>
          <li><strong>In-network vs. out-of-network:</strong> Using in-network providers usually costs significantly less</li>
          <li><strong>Deductibles:</strong> You may need to meet your deductible before insurance pays</li>
          <li><strong>Copays and coinsurance:</strong> Your share of each session's cost</li>
          <li><strong>Session limits:</strong> Some plans limit the number of covered sessions per year (though this is becoming less common)</li>
          <li><strong>Pre-authorization requirements:</strong> Some services may require approval</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">How to check your coverage:</h3>
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Call the member services number on your insurance card</li>
          <li>Ask specifically about outpatient mental health benefits</li>
          <li>Questions to ask:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>What is my copay or coinsurance for outpatient mental health?</li>
              <li>Do I have a deductible for mental health services?</li>
              <li>Is there a limit on the number of sessions?</li>
              <li>Do I need pre-authorization?</li>
              <li>Is [specific provider] in-network?</li>
            </ul>
          </li>
        </ol>

        <p className="text-lg text-muted-foreground">
          At <Link to="/insurance" className="text-primary hover:underline">Coping and Healing Counseling</Link>, we can help verify your benefits before your first appointment.
        </p>
      </section>

      {/* Section 3: Insurance We Accept at CHC */}
      <section className="mb-12">
        <h2 id="insurance-we-accept-at-chc" className="text-3xl font-bold text-foreground mb-6">Insurance We Accept at CHC</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          At Coping and Healing Counseling, we work with most major insurance providers to make therapy accessible.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Insurance plans we accept:</h3>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/caresource" className="text-primary hover:underline">CareSource</Link>
            </h4>
            <p className="text-muted-foreground">
              One of Georgia's largest Medicaid managed care organizations. If you have CareSource, you likely have excellent mental health coverage with low or no out-of-pocket costs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/amerigroup" className="text-primary hover:underline">Amerigroup</Link>
            </h4>
            <p className="text-muted-foreground">
              Another major Georgia Medicaid provider. Amerigroup members typically have comprehensive mental health benefits.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/peach-state" className="text-primary hover:underline">Peach State Health Plan</Link>
            </h4>
            <p className="text-muted-foreground">
              Georgia Medicaid coverage through Peach State includes mental health services at CHC.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/aetna" className="text-primary hover:underline">Aetna</Link>
            </h4>
            <p className="text-muted-foreground">
              We're in-network with many Aetna plans. Coverage varies by specific plan.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/bluecross-blueshield" className="text-primary hover:underline">BlueCross BlueShield</Link>
            </h4>
            <p className="text-muted-foreground">
              We accept various BCBS plans. Contact us to verify your specific plan.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/cigna" className="text-primary hover:underline">Cigna</Link>
            </h4>
            <p className="text-muted-foreground">
              In-network with many Cigna plans for mental health services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/humana" className="text-primary hover:underline">Humana</Link>
            </h4>
            <p className="text-muted-foreground">
              We accept Humana insurance for therapy services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/optum" className="text-primary hover:underline">Optum</Link>
            </h4>
            <p className="text-muted-foreground">
              In-network with Optum behavioral health plans.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              <Link to="/insurance/alliant" className="text-primary hover:underline">Alliant Health Plans</Link>
            </h4>
            <p className="text-muted-foreground">
              We work with Alliant for mental health coverage.
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-4">
          <strong>And more...</strong> We're continually expanding our insurance network. If you don't see your insurance listed, <Link to="/contact-us" className="text-primary hover:underline">contact us</Link>—we may still be able to work with your plan.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Verifying your benefits:</h3>
        <p className="text-lg text-muted-foreground">
          Not sure if you're covered? We offer free benefit verification. <Link to="/therapist-matching" className="text-primary hover:underline">Schedule a consultation</Link> and we'll help you understand your coverage before you commit.
        </p>
      </section>

      {/* Section 4: Georgia Medicaid Coverage for Therapy */}
      <section className="mb-12">
        <h2 id="georgia-medicaid-coverage-for-therapy" className="text-3xl font-bold text-foreground mb-6">Georgia Medicaid Coverage for Therapy</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          If you have Georgia Medicaid, you likely have coverage for mental health services at little to no cost to you.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">How Georgia Medicaid works:</h3>
        <p className="text-muted-foreground mb-4">
          Georgia Medicaid is administered through Care Management Organizations (CMOs). The main CMOs are:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li><Link to="/insurance/caresource" className="text-primary hover:underline">CareSource</Link></li>
          <li><Link to="/insurance/amerigroup" className="text-primary hover:underline">Amerigroup</Link></li>
          <li><Link to="/insurance/peach-state" className="text-primary hover:underline">Peach State Health Plan</Link></li>
        </ul>
        <p className="text-muted-foreground mb-6">
          Each CMO provides the same core mental health benefits required by Medicaid, though there may be minor differences in how services are accessed.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">What Medicaid covers:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Individual therapy</li>
          <li>Family therapy</li>
          <li>Psychiatric evaluation</li>
          <li>Medication management</li>
          <li>Crisis services</li>
          <li>And more</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Your cost:</h3>
        <p className="text-muted-foreground mb-6">
          With Georgia Medicaid, your out-of-pocket cost for therapy is typically $0 or a very small copay (usually $1-$3 per visit).
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Who qualifies for Georgia Medicaid:</h3>
        <p className="text-muted-foreground mb-4">
          Eligibility is based on income and household size. You may qualify if you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Have low income</li>
          <li>Are pregnant</li>
          <li>Have children under 19</li>
          <li>Are disabled</li>
          <li>Are 65 or older</li>
          <li>Meet other specific criteria</li>
        </ul>
        <p className="text-muted-foreground mb-6">
          To check eligibility or apply, visit the Georgia Gateway website.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">At CHC:</h3>
        <p className="text-lg text-muted-foreground">
          We proudly accept Georgia Medicaid through CareSource, Amerigroup, and Peach State. We believe everyone deserves access to quality mental health care, regardless of income. <Link to="/contact-us" className="text-primary hover:underline">Contact us</Link> to get started with your Medicaid coverage.
        </p>
      </section>

      {/* Section 5: Understanding Your Insurance Benefits */}
      <section className="mb-12">
        <h2 id="understanding-your-insurance-benefits" className="text-3xl font-bold text-foreground mb-6">Understanding Your Insurance Benefits</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          Insurance terminology can be confusing. Here's what the key terms mean for your therapy costs:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Premium</h3>
            <p className="text-muted-foreground">
              The monthly amount you (or your employer) pay for insurance coverage. This is separate from what you pay when you use services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Deductible</h3>
            <p className="text-muted-foreground mb-2">
              The amount you must pay out-of-pocket before insurance starts covering services. For example, with a $500 deductible, you pay the first $500 of services yourself before insurance kicks in.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Some plans have separate mental health deductibles</li>
              <li>Some plans cover certain services before you meet the deductible</li>
              <li>High-deductible plans (HDHPs) have higher deductibles but lower premiums</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Copay</h3>
            <p className="text-muted-foreground">
              A fixed amount you pay for each service. For example, a $30 copay means you pay $30 per therapy session regardless of the session's full cost.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Coinsurance</h3>
            <p className="text-muted-foreground">
              The percentage of costs you pay after meeting your deductible. For example, with 20% coinsurance, you pay 20% of the allowed amount and insurance pays 80%.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Out-of-pocket maximum</h3>
            <p className="text-muted-foreground">
              The most you'll pay in a year for covered services. After reaching this limit, insurance pays 100%. This protects you from catastrophic costs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">In-network vs. out-of-network</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>In-network:</strong> Providers who have contracts with your insurance company. Using in-network providers costs you less.</li>
              <li><strong>Out-of-network:</strong> Providers without contracts. You'll pay more, and some plans don't cover out-of-network care at all.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pre-authorization (prior authorization)</h3>
            <p className="text-muted-foreground">
              Some services require your insurance company's approval before they're covered. This is more common for intensive services than routine therapy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Superbill</h3>
            <p className="text-muted-foreground">
              A detailed receipt that includes diagnostic codes, procedure codes, and other information needed to submit a claim. If you see an out-of-network provider, you can submit a superbill to your insurance for potential reimbursement.
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mt-6">
          Understanding these terms helps you predict your costs and avoid surprises. If you have questions about your specific benefits, <Link to="/contact-us" className="text-primary hover:underline">contact us</Link>—we're happy to help.
        </p>
      </section>
      {/* Section 6: How to Use Your Insurance for Therapy */}
      <section className="mb-12">
        <h2 id="how-to-use-your-insurance-for-therapy" className="text-3xl font-bold text-foreground mb-6">How to Use Your Insurance for Therapy</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          Navigating insurance for mental health services doesn't have to be complicated. Here's a step-by-step guide.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Step 1: Verify your benefits</h3>
        <p className="text-muted-foreground mb-4">Before scheduling, understand what your plan covers:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Call the member services number on your insurance card</li>
          <li>Ask about outpatient mental health benefits</li>
          <li>Confirm your copay, deductible, and any session limits</li>
          <li>Ask if you need pre-authorization</li>
        </ul>
        <p className="text-muted-foreground mb-6">
          Or let us help—at <Link to="/contact-us" className="text-primary hover:underline">CHC</Link>, we offer free benefit verification.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Step 2: Find an in-network provider</h3>
        <p className="text-muted-foreground mb-4">Using in-network providers saves you money:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Check your insurance company's provider directory online</li>
          <li>Call member services and ask for in-network therapists</li>
          <li>When you find a provider you're interested in, confirm they're still in-network (directories can be outdated)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Step 3: Schedule your appointment</h3>
        <p className="text-muted-foreground mb-4">When scheduling:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Provide your insurance information</li>
          <li>Ask about any upfront costs</li>
          <li>Confirm the provider will bill your insurance directly</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Step 4: Attend your session</h3>
        <p className="text-muted-foreground mb-4">At your appointment:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Bring your insurance card</li>
          <li>Be prepared to pay your copay at the time of service</li>
          <li>Complete any required paperwork</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Step 5: Review your Explanation of Benefits (EOB)</h3>
        <p className="text-muted-foreground mb-4">After your session, you'll receive an EOB from your insurance:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>This is not a bill—it's a summary of how the claim was processed</li>
          <li>Review it to ensure accuracy</li>
          <li>If something seems wrong, contact your insurance company</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Common issues and solutions:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li><strong>Claim denied:</strong> Ask why and whether you can appeal</li>
          <li><strong>Higher-than-expected cost:</strong> Verify you're seeing an in-network provider</li>
          <li><strong>Surprise bill:</strong> Contact your insurance company and the provider's billing department</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">At CHC:</h3>
        <p className="text-lg text-muted-foreground">
          We handle insurance billing directly, so you can focus on your therapy rather than paperwork. We'll verify your benefits, submit claims, and help you understand your costs upfront.
        </p>
      </section>

      {/* Section 7: Therapy Without Insurance: Self-Pay Options */}
      <section className="mb-12">
        <h2 id="therapy-without-insurance-self-pay-options" className="text-3xl font-bold text-foreground mb-6">Therapy Without Insurance: Self-Pay Options</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          If you don't have insurance or prefer not to use it, you still have options for affordable therapy.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Why some people choose self-pay:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>No insurance or inadequate mental health coverage</li>
          <li>Prefer to keep therapy private (insurance requires a diagnosis on record)</li>
          <li>Want to choose any therapist, not just in-network providers</li>
          <li>Have a high-deductible plan where they'd pay out-of-pocket anyway</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Self-pay rates vary widely:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>National average: $100-$200 per session</li>
          <li>Can range from $60 to $300+ depending on location, credentials, and specialty</li>
          <li>At Coping and Healing Counseling: $75/week (minimum 4 sessions)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Ways to make self-pay affordable:</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Sliding scale fees</h4>
            <p className="text-muted-foreground">Many therapists offer reduced rates based on your income. Don't be afraid to ask—therapists want to help and often have flexibility.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Community mental health centers</h4>
            <p className="text-muted-foreground">These offer services on a sliding scale based on ability to pay, sometimes as low as $5-$20 per session.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Training clinics</h4>
            <p className="text-muted-foreground">University counseling programs offer low-cost therapy provided by supervised graduate students. Quality is often excellent.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Employee Assistance Programs (EAP)</h4>
            <p className="text-muted-foreground">Many employers offer free short-term counseling through EAPs—typically 3-8 sessions at no cost. Check with your HR department.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Open Path Collective</h4>
            <p className="text-muted-foreground">A nonprofit that connects people with therapists who offer sessions for $30-$80.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Group therapy</h4>
            <p className="text-muted-foreground">Often more affordable than individual therapy and can be just as effective for many concerns.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Online therapy platforms</h4>
            <p className="text-muted-foreground">Some offer lower rates than traditional in-person therapy, though quality varies.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">At CHC:</h3>
        <p className="text-lg text-muted-foreground">
          Our self-pay rate of $75/week makes therapy accessible without insurance. We require a minimum purchase of 4 sessions, but this investment can lead to meaningful change. <Link to="/contact-us" className="text-primary hover:underline">Contact us</Link> to discuss self-pay options.
        </p>
      </section>

      {/* Section 8: What Is a Superbill? */}
      <section className="mb-12">
        <h2 id="what-is-a-superbill" className="text-3xl font-bold text-foreground mb-6">What Is a Superbill?</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          If you see an out-of-network therapist, you may be able to get partial reimbursement from your insurance using a superbill.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">What is a superbill?</h3>
        <p className="text-muted-foreground mb-4">
          A superbill is a detailed receipt provided by your therapist that includes all the information your insurance needs to process an out-of-network claim:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Provider's name, credentials, and NPI number</li>
          <li>Provider's tax ID</li>
          <li>Your name and date of birth</li>
          <li>Date of service</li>
          <li>CPT codes (procedure codes describing the service)</li>
          <li>Diagnosis codes (ICD-10)</li>
          <li>Amount paid</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">How to use a superbill:</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Step 1: Pay your therapist</h4>
            <p className="text-muted-foreground">With out-of-network providers, you typically pay the full session fee at the time of service.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Step 2: Request a superbill</h4>
            <p className="text-muted-foreground">Ask your therapist for a superbill after each session or monthly.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Step 3: Submit to insurance</h4>
            <p className="text-muted-foreground mb-2">Send the superbill to your insurance company. This can usually be done:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Through your insurance company's website or app</li>
              <li>By mail to the claims address on your insurance card</li>
              <li>Via fax (some insurers still use this)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Step 4: Receive reimbursement</h4>
            <p className="text-muted-foreground mb-2">If approved, your insurance will reimburse you directly. The amount depends on:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Your out-of-network benefits</li>
              <li>Whether you've met your deductible</li>
              <li>Your plan's "usual and customary" rate for the service</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">What to expect:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Processing typically takes 2-6 weeks</li>
          <li>Reimbursement is usually 50-80% of the "allowed amount" (not necessarily what you paid)</li>
          <li>You'll receive an EOB explaining the decision</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Important considerations:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Not all plans have out-of-network benefits—check first</li>
          <li>The reimbursement may be less than you expect</li>
          <li>You must meet your out-of-network deductible first</li>
          <li>Keep copies of everything you submit</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">At CHC:</h3>
        <p className="text-lg text-muted-foreground">
          Because we're in-network with most major insurers, most clients don't need to deal with superbills. But if you have out-of-network benefits and see a provider outside our network, superbills can help offset costs.
        </p>
      </section>

      {/* Section 9: Is Therapy Worth the Cost? */}
      <section className="mb-12">
        <h2 id="is-therapy-worth-the-cost" className="text-3xl font-bold text-foreground mb-6">Is Therapy Worth the Cost?</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          When considering therapy costs, it's helpful to think about the value you receive in return.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">The cost of not getting help:</h3>
        <p className="text-muted-foreground mb-4">Untreated mental health conditions can lead to significant costs:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li><strong>Lost productivity:</strong> Depression alone costs the U.S. economy over $200 billion annually in lost productivity</li>
          <li><strong>Medical costs:</strong> Mental health issues often manifest as physical symptoms, leading to unnecessary medical visits and tests</li>
          <li><strong>Relationship costs:</strong> Damaged relationships can lead to divorce, which is financially devastating</li>
          <li><strong>Career impact:</strong> Untreated anxiety or depression can limit career advancement and earning potential</li>
          <li><strong>Substance use:</strong> Self-medicating with alcohol or drugs creates additional costs and problems</li>
          <li><strong>Reduced quality of life:</strong> The toll on your happiness and wellbeing has real value</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Research on therapy's return on investment:</h3>
        <p className="text-muted-foreground mb-4">Studies show that therapy provides significant returns:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>For every $1 spent on treating common mental health conditions, there's a $4 return in improved health and productivity</li>
          <li>Effective treatment reduces medical costs, sick days, and disability claims</li>
          <li>Many people see improvements in work performance and relationships that have financial benefits</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Therapy compared to other investments:</h3>
        <p className="text-muted-foreground mb-4">Consider what you spend on:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Monthly gym membership: $30-$100+</li>
          <li>Daily coffee: $100-$150+ per month</li>
          <li>Streaming services: $50-$100+ per month</li>
          <li>A single car repair: $500-$2,000+</li>
        </ul>
        <p className="text-muted-foreground mb-6">
          Therapy at CHC costs $75/week—comparable to many routine expenses, but with the potential to transform your life.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Tangible outcomes from therapy:</h3>
        <p className="text-muted-foreground mb-4">People who complete therapy often report:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>Better job performance and career advancement</li>
          <li>Improved relationships with partners, family, and friends</li>
          <li>Reduced medical visits and medication needs</li>
          <li>Better sleep and physical health</li>
          <li>Increased confidence and life satisfaction</li>
          <li>Better parenting and family dynamics</li>
          <li>Reduced reliance on unhealthy coping mechanisms</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">The question isn't just "Can I afford therapy?"</h3>
        <p className="text-lg text-muted-foreground">
          It's also "Can I afford not to address what's holding me back?" Investing in your mental health is investing in yourself, your relationships, your career, and your future.
        </p>
      </section>

      {/* Section 10: Financial Assistance and Low-Cost Options */}
      <section className="mb-12">
        <h2 id="financial-assistance-and-low-cost-options" className="text-3xl font-bold text-foreground mb-6">Financial Assistance and Low-Cost Options</h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          If cost is a barrier to getting therapy, several options can help make mental health care more accessible.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Georgia-specific resources:</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Georgia Medicaid</h4>
            <p className="text-muted-foreground">If you qualify based on income, Medicaid provides comprehensive mental health coverage at little to no cost. Apply through Georgia Gateway.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">PeachCare for Kids</h4>
            <p className="text-muted-foreground">Georgia's CHIP program provides health coverage for uninsured children in families who earn too much for Medicaid but can't afford private insurance.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Community Service Boards (CSBs)</h4>
            <p className="text-muted-foreground">Georgia's network of public mental health providers offers services on a sliding scale. Find your local CSB through the Georgia Department of Behavioral Health and Developmental Disabilities.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">National resources:</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Open Path Collective</h4>
            <p className="text-muted-foreground">A nonprofit network of therapists offering sessions for $30-$80. Visit openpathcollective.org.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">SAMHSA National Helpline</h4>
            <p className="text-muted-foreground">Free, confidential, 24/7 treatment referral service. Call 1-800-662-4357.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">NAMI Georgia</h4>
            <p className="text-muted-foreground">The National Alliance on Mental Illness offers support groups and can help connect you with resources.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Crisis services (always free):</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          <li>988 Suicide & Crisis Lifeline: Call or text 988</li>
          <li>Crisis Text Line: Text HOME to 741741</li>
          <li>Visit our <Link to="/emergency-resources" className="text-primary hover:underline">emergency resources page</Link></li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">Other options:</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Employee Assistance Programs (EAP)</h4>
            <p className="text-muted-foreground">Check if your employer offers free counseling sessions through an EAP.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">University training clinics</h4>
            <p className="text-muted-foreground">Graduate programs in psychology and counseling offer low-cost therapy provided by supervised trainees.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Federally Qualified Health Centers (FQHCs)</h4>
            <p className="text-muted-foreground">Community health centers offer mental health services on a sliding scale based on income.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Religious organizations</h4>
            <p className="text-muted-foreground">Some churches and religious organizations offer free or low-cost counseling.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Online support:</h3>
        <p className="text-muted-foreground mb-6">
          While not a replacement for therapy, free resources like support groups, apps, and online communities can provide additional support.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">At Coping and Healing Counseling:</h3>
        <p className="text-lg text-muted-foreground">
          We accept Georgia Medicaid and most major insurance plans. Our self-pay rate of $75/week is designed to be accessible. <Link to="/therapist-matching" className="text-primary hover:underline">Contact us</Link> to discuss your options—we're committed to helping you access care.
        </p>
      </section>

      {/* Mid-Content CTA */}
      <section className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Not Sure About Your Coverage?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We offer free benefit verification to help you understand your costs before you start. Our team will check your insurance and explain your options—no obligation.
        </p>
        <Link to="/therapist-matching">
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
            Verify My Benefits
          </button>
        </Link>
      </section>
    </PillarPageTemplate>
  );
};

export default TherapyCostGuide;
