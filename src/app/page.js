// src/app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* 2. HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:items-start">
          {/* Left - text */}
         <div className="flex items-center">
           <div className="flex-1 space-y-2">
          
            <h1 className="text-4xl font-bold  text-gray-900 md:text-5xl">
              Learn, explore, and manage your courses in one place.
            </h1>
            <p className="max-w-xl text-gray-600 md:text-lg mt-10">
              CourseHub is a classic learning platform where instructors can add and manage courses, and students can browse detailed course information securely
            </p>
            <div className="flex flex-wrap gap-3 mt-15">
              <Link
                href="/courses"
                className="rounded-full bg-blue-600 px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                View Courses
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-blue-200 px-6 py-2.5 text-lg font-semibold text-blue-700 hover:bg-blue-50"
              >
                Login to Manage
              </Link>
            </div>
          </div>

          {/* Right - illustration card */}
          <div className="flex-1">
            <img  src="https://i.ibb.co/h1XWmkN9/banner-image.png" alt="" />
          </div>
         </div>
        </div>
      </section>

      {/* 3. SECTION: FEATURES */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Core Features</h2>
          <p className="mt-1 text-lg text-gray-600">
            Everything you get once connect with us.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Real-World Skills",
                desc: "Our courses learning is suitable for practical work, in-depth skills, not just theory.",
              },
              {
                title: "Learning Flexibility",
                desc: "24/7 lifetime access, mobile compatibility, short video modules and the ability to learn at  own pace.",
              },
              {
                title: "Expert-Led Instruction",
                desc: "All time support available through Q&A forums, direct feedback, community etc."
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500"
              >
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-lg text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: SAMPLE ITEMS PREVIEW */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Best-Selling Courses</h2>
              <p className="mt-1 text-lg text-gray-600">
                Here are the best selling courses. You can take demo class to judge our quality.
              </p>
            </div>
            <Link
              href="/items"
              className="text-lg font-medium text-blue-600 hover:text-blue-700"
            >
              Go to full course page
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Basic to Advance Python",
                image: "https://i.ibb.co/VYXCVgB0/Python-101.png",
                price: "$99",
                desc: "Great content, practical example and real life projects and study.",
              },
              {
                title: "Intermediate to Pro English Spoken",
                image: "https://i.ibb.co/DDQfThd7/Eng.webp",
                price: "$199",
                desc: "Stay comfortable during conversation in daily life with delegates.",
              },
              {
                title: "Machine Learning: Zeo to Hero",
                image: "https://i.ibb.co/FdMFwjT/machine-learning.webp",
                price: "$79",
                desc: "Learn A to Z of machine learning with real world projects and example",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl  bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img className="" src={item.image} alt="" />
                {/* <div className="h-36 w-full rounded-t-xl bg-gradient-to-br from-gray-100 to-gray-200" /> */}
                <div className="flex flex-1 flex-col p-4">
                  
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-lg text-gray-600">
                    {item.desc}
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex justify-center rounded-full border px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Top Reviews</h2>
          <p className="mt-1 text-lg text-gray-600">
            From from coast to coast, people expressed their feedback.
          </p>

          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              "This course was the reason I got promoted. Before, I was stuck doing basic reporting in Excel.",
              "I was worried this was too advanced for a non-programmer, but the pace is perfect. The videos are short, high-quality, and the downloadable code notebooks made it easy to follow",
              "I posted a tricky question in the forum late one night and was shocked to get a detailed, personalized response from her the next morning. Unrivaled support",
              "The structure is logical and incredibly thorough. It starts with a solid Python foundation and progresses perfectly into complex machine learning libraries.",
            ].map((step, index) => (
              <li
                key={index}
                className="flex flex-col rounded-xl border bg-gray-50 p-4 text-lg text-gray-700"
              >
                <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. SECTION: FINAL CALL TO ACTION */}
      <section className="bg-blue-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center text-white md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold">Ready to explore?</h2>
            
          </div>
          <div className="flex gap-3">
            <Link
              href="/courses"
              className="rounded-full bg-white px-5 py-2 text-lg font-semibold text-blue-700 hover:bg-blue-50"
            >
              Explore Courses
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-blue-200 px-5 py-2 text-lg font-semibold text-white hover:bg-blue-500"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
