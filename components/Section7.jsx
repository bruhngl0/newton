"use client";

import React, { useState } from "react";
import "../styles/section7.scss";

const Section7 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "What's the difference between bookkeeping and what Visify does?",
      answer:
        "Bookkeeping records what happens financially in a business, but Visify takes it further to act as your outsourced finance team, providing financial insights, forecasting, and strategic advice to help you make confident decisions and drive growth.",
    },
    {
      question: "Do you offer tax services?",
      answer:
        "While we work closely with tax professionals, we focus on providing comprehensive bookkeeping, financial reporting, and strategic advisory services. We can coordinate with your tax accountant to ensure seamless service.",
    },
    {
      question: "How much do your packages cost?",
      answer:
        "Our packages are tailored to your business needs and size. We offer flexible pricing based on transaction volume, complexity, and level of service required. Contact us for a personalized quote.",
    },
    {
      question: "Can I start with one package and upgrade later?",
      answer:
        "Absolutely! Our packages are designed to scale with your business. You can start with a package that suits your current needs and upgrade as your business grows and requires more comprehensive services.",
    },
    {
      question: "What software or tools do you use (e.g, Xero)?",
      answer:
        "We primarily work with Xero, MYOB, and other leading accounting platforms. We also integrate tools like Fathom for reporting, Dext for receipt management, and XBert for automation to provide you with the best financial infrastructure.",
    },
    {
      question: "How do you work with clients day-to-day?",
      answer:
        "We maintain regular communication through your preferred channels - email, phone, or video calls. You'll have a dedicated team member who understands your business, and we provide monthly reports and strategic sessions to keep you informed and aligned.",
    },
    {
      question: "What's included in your monthly reports?",
      answer:
        "Our monthly reports include profit & loss statements, balance sheets, cash flow analysis, key performance indicators (KPIs), budget vs. actual comparisons, and actionable insights tailored to your business goals.",
    },
    {
      question: "How do you ensure my data is accurate and secure?",
      answer:
        "We use cloud-based platforms with bank-level encryption, implement multi-factor authentication, conduct regular reconciliations, and follow strict internal quality control processes. Your data security and accuracy are our top priorities.",
    },
    {
      question: "How quickly will I see value from your services?",
      answer:
        "Most clients notice improved financial clarity within the first month. You'll receive your first comprehensive report within 30 days, and as we learn your business, our insights and strategic advice become increasingly valuable over time.",
    },
    {
      question: "Do you work with businesses outside of Bundaberg, Queensland?",
      answer:
        "Yes! While we're based in Bundaberg, we work with businesses across Australia. Our cloud-based systems and virtual communication tools allow us to provide seamless service regardless of your location.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section7">
      <div className="section7-content">
        <div className="section7-header">
          <p className="section7-subtitle">FAQS</p>
          <h2 className="section7-title">Got questions?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
