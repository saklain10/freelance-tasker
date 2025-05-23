import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Why choose Our Platform?</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Our Freelance Task Marketplace connects clients with talented freelancers, making it easy to outsource tasks and find rewarding work opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Find the right talent for every task</h3>
          <p className="text-gray-600">
            Whether you're a startup, small business, or individual, our platform helps you find skilled freelancers for tasks of any size. Post your task, review bids, and hire the perfect match based on skills, deadlines, and budget.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="https://i.ibb.co/kVHmVMzk/retained-search.jpg" alt="Find Talent" className="w-80 h-auto rounded" />
        </div>

        <div className="flex justify-center md:order-2">
          <img src={'https://i.ibb.co/DDrG45jm/download-5.jpg'} alt="Work Anywhere" className="w-80 h-auto rounded" />
        </div>
        <div className="md:order-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Work from anywhere, anytime</h3>
          <p className="text-gray-600">
            Freelancers can browse tasks based on their skills and availability. Whether you're at home or on the go, you can complete tasks on your own schedule and build your reputation through quality work and timely delivery.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Get paid quickly and securely</h3>
          <p className="text-gray-600">
            Once a task is completed and approved, payments are processed swiftly and securely through our platform. Focus on your work while we ensure hassle-free, on-time transactions every time.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={'https://i.ibb.co/fdQh7mGx/Online-payment-methods-Business-guide-to-the-best-solution-60b594db3f.jpg'} alt="Secure Payments" className="w-80 h-auto rounded" />
        </div>
      </div>
    </section>
  );
}
