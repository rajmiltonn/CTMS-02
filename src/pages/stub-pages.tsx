import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

/**
 * Stub pages for initial navigation
 * These would be filled with proper content in a real project
 */

// Academics page
export const AcademicsPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Courses at Cloud Tech Mind Solutions
        </h1>
        <p className="text-gray-600 mb-8">
          At Cloud Tech Mind Solutions, we offer a future-focused curriculum designed to equip individuals with
          the technical expertise and problem-solving abilities required in today’s fast-evolving digital landscape.
          Our courses are designed to align with industry demands, empowering learners to become confident professionals.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Training Programs Offered</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                <strong>Fresher’s Bridge Program:</strong> Foundation for non-IT learners to transition into IT roles.
              </li>
              <li>
                <strong>Salesforce Training:</strong> Focus on Admin, Development, LWC, and Real-time project deployments.
              </li>
              <li>
                <strong>Digital Marketing:</strong> SEO, SEM, Social Media Marketing, Content Strategy, and Analytics.
              </li>
              <li>
                <strong>Java Full Stack Development:</strong> Core Java, Spring Boot, React.js, REST APIs, and MySQL.
              </li>
              <li>
                <strong>Python Full Stack Development:</strong> Python, Django/Flask, HTML/CSS, JS, and database integration.
              </li>
              <li>
                <strong>Machine Learning & Data Science:</strong> Pandas, Numpy, Scikit-learn, NLP, Deep Learning, and Neural Networks.
              </li>
              <li>
                <strong>Google Analytics:</strong> Campaign tracking, user behavior insights, conversion funnels.
              </li>
              <li>
                <strong>CBSE Academic Foundation Courses (Grades 6–12):</strong> Math, Science, and Conceptual Learning.
              </li>
              <li>
                <strong>Placement Readiness Packages:</strong> Tailored training modules for college students and freshers.
              </li>
            </ul>

            <p className="text-gray-600 mt-6">
              Each course includes real-time projects, industry mentorship, and certification support. CTMS bridges the
              gap between academia and industry through experiential learning and personalized career mapping.
            </p>

            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-6">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};


// Facilities page
export const FacilitiesPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Facilities at Cloud Tech Mind Solutions
        </h1>
        <p className="text-gray-600 mb-8">
          Cloud Tech Mind Solutions provides a professional and engaging environment designed to support modern learning needs.
          Our infrastructure is tailored to encourage hands-on learning, technical exploration, and career development.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Training Infrastructure</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Modern, air-conditioned classrooms with digital presentation tools</li>
              <li>Dedicated labs for Full Stack Development, Data Science, and Salesforce practice</li>
              <li>High-speed internet and cloud-based learning platforms</li>
              <li>Collaborative workspaces for group discussions and project execution</li>
              <li>Resource library with curated content and reference materials</li>
              <li>One-on-one career guidance and mentoring zones</li>
              <li>Dedicated spaces for soft skills and language training</li>
              <li>Event areas for workshops, guest lectures, and placement training</li>
            </ul>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-6">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

// Admissions page
export const AdmissionsPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Enroll with CTMS
        </h1>
        <p className="text-gray-600 mb-8">
          We welcome learners, professionals, and career changers who are eager to upgrade their skills and grow in today’s digital world.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Enrollment Process</h2>
            <p className="text-gray-600 mb-2">
              Get started on your transformation journey with CTMS. Here’s everything you need to know:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li><strong>Program Start Dates & Timelines</strong></li>
              <li><strong>Eligibility & Application Requirements</strong></li>
              <li><strong>Program Fees & Payment Plans</strong></li>
              <li><strong>Scholarships & Financial Aid Options</strong></li>
              <li><strong>Free Career Counseling & Technical Fitment Sessions</strong></li>
            </ul>
            <p className="text-gray-600 italic">
              Take the First Step → Join a free counseling session or explore our courses to start your digital transformation journey.
            </p>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-6">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};


// News & Events page
export const NewsEventsPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          News & Updates
        </h1>
        <p className="text-gray-600 mb-8">
          Stay informed with the latest developments at Cloud Tech Mind Solutions — from program launches 
          and success stories to events, workshops, and tech insights.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">CTMS Announcements & Calendar</h2>
            <p className="text-gray-600 mb-4">
              This section features regularly updated content, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Upcoming Webinars, Bootcamps & Career Fairs</li>
              <li>Student Success Stories & Placement Highlights</li>
              <li>New Product Releases & Service Updates</li>
              <li>Press Mentions & Strategic Collaborations</li>
              <li>CTMS Announcements & Important Dates</li>
            </ul>
            <p className="text-gray-600 italic">
              Keep an eye on what’s happening — because every event is a step toward transformation.
            </p>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-6">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

