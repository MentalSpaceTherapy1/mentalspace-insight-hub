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
    </PillarPageTemplate>
  );
};

export default TherapyCostGuide;
