'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Typography from '../components/ui/Typography';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Testimonial from '../components/ui/Testimonial';
import Modal from '../components/ui/Modal';

export default function UIShowcasePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white min-h-screen w-full">
      <div className="container-custom py-20">
        <div className="mb-12 text-center">
          <Typography as="h1" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-neutral-900 mb-4">
            UI Components Showcase
          </Typography>
          <Typography as="p" className="font-normal text-lg text-neutral-600 max-w-3xl mx-auto">
            Modern, accessible, and highly customizable UI components for your web application.
          </Typography>
        </div>

        {/* Typography */}
        <section className="mb-20">
          <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-neutral-900">
            Typography
          </Typography>
          <div className="grid gap-6 bg-neutral-50 p-8 rounded-xl">
            <Typography as="h1" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-neutral-900">
              Heading 1
            </Typography>
            <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-neutral-900">
              Heading 2
            </Typography>
            <Typography as="h3" className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight text-neutral-900">
              Heading 3
            </Typography>
            <Typography as="h4" className="font-display font-semibold text-xl md:text-2xl tracking-tight text-neutral-900">
              Heading 4
            </Typography>
            <Typography as="h5" className="font-display font-semibold text-lg md:text-xl text-neutral-900">
              Heading 5
            </Typography>
            <Typography as="h6" className="font-display font-semibold text-base md:text-lg text-neutral-900">
              Heading 6
            </Typography>
            <Typography as="p" className="font-normal text-base leading-relaxed text-neutral-900">
              Body 1: This is a sample paragraph with normal text. Good typography is essential for clear communication and user experience. The text should be readable with proper contrast against the background.
            </Typography>
            <Typography as="p" className="font-normal text-sm leading-relaxed text-neutral-700">
              Body 2: This is smaller text often used for less important information or captions. It should still be legible and have sufficient contrast with the background.
            </Typography>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-neutral-900">
            Buttons
          </Typography>
          <div className="grid gap-6 md:grid-cols-2 bg-neutral-50 p-8 rounded-xl">
            <div className="space-y-4">
              <Typography as="h4" className="font-display font-semibold text-xl tracking-tight text-neutral-900 mb-3">
                Button Variants
              </Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div className="space-y-4">
              <Typography as="h4" className="font-display font-semibold text-xl tracking-tight text-neutral-900 mb-3">
                Button Sizes
              </Typography>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
              </div>
            </div>

            <div className="space-y-4">
              <Typography as="h4" className="font-display font-semibold text-xl tracking-tight text-neutral-900 mb-3">
                Button States
              </Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" isLoading>Loading</Button>
                <Button variant="primary" isDisabled>Disabled</Button>
                <Button 
                  variant="primary" 
                  leftIcon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                >
                  With Icon
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Typography as="h4" className="font-display font-semibold text-xl tracking-tight text-neutral-900 mb-3">
                Links as Buttons
              </Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="#">Primary Link</Button>
                <Button variant="secondary" href="#">Secondary Link</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-20">
          <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-neutral-900">
            Cards
          </Typography>
          <div className="grid gap-8 md:grid-cols-3">
            <Card 
              variant="default" 
              title="Default Card" 
              subtitle="A standard card component"
              interactive
              hoverEffect="lift"
            >
              <Typography as="p" className="text-neutral-700">
                This is a basic card component with a title and subtitle.
              </Typography>
              <div className="mt-4">
                <Button variant="primary" size="sm">Learn More</Button>
              </div>
            </Card>

            <Card 
              variant="glass" 
              title="Glass Card" 
              subtitle="A card with backdrop blur effect"
              interactive
              hoverEffect="glow"
            >
              <Typography as="p" className="text-neutral-700">
                This card has a semi-transparent background with a blur effect.
              </Typography>
              <div className="mt-4">
                <Button variant="primary" size="sm">Learn More</Button>
              </div>
            </Card>

            <Card 
              variant="outlined" 
              title="Outlined Card" 
              subtitle="A card with border only"
              interactive
              hoverEffect="border"
            >
              <Typography as="p" className="text-neutral-700">
                This card has a transparent background with a border.
              </Typography>
              <div className="mt-4">
                <Button variant="primary" size="sm">Learn More</Button>
              </div>
            </Card>

            <Card 
              variant="raised" 
              title="Raised Card" 
              subtitle="A card with shadow effect"
              interactive
              hoverEffect="scale"
              iconBefore={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="rgb(var(--primary))"/>
                </svg>
              }
            >
              <Typography as="p" className="text-neutral-700">
                This card has a shadow and an icon badge in the top-left corner.
              </Typography>
              <div className="mt-4">
                <Button variant="primary" size="sm">Learn More</Button>
              </div>
            </Card>

            <Card 
              variant="default" 
              title="Card with Image" 
              subtitle="An image card with hover effect"
              interactive
              hoverEffect="lift"
              imageSrc="/images/placeholder.jpg"
              imageAlt="Sample image"
              aspectRatio="square"
            >
              <Typography as="p" className="text-neutral-700">
                This card includes an image with overlay gradient on hover.
              </Typography>
              <div className="mt-4">
                <Button variant="primary" size="sm">View Details</Button>
              </div>
            </Card>

            <Card 
              variant="default" 
              href="#"
              title="Clickable Card" 
              subtitle="The entire card is clickable"
              interactive
              hoverEffect="scale"
            >
              <Typography as="p" className="text-neutral-700">
                This entire card is clickable and navigates to another page.
              </Typography>
              <div className="mt-4 flex items-center text-primary">
                <span>Read more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Card>
          </div>
        </section>

        {/* Inputs */}
        <section className="mb-20">
          <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-neutral-900">
            Input Fields
          </Typography>
          <div className="grid gap-8 md:grid-cols-2 bg-neutral-50 p-8 rounded-xl">
            <Input 
              label="Default Input" 
              placeholder="Enter your name"
              helperText="This is a default input field with helper text."
            />

            <Input 
              label="Input with Icon" 
              placeholder="Search..."
              leftIcon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              clearable
            />

            <Input 
              label="Password Input" 
              type="password"
              placeholder="Enter your password"
              variant="filled"
              rightIcon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5C7.58172 5 4 8.58172 4 12C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 12C20 8.58172 16.4183 5 12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              required
            />

            <Input 
              label="Input with Character Count" 
              placeholder="Limited to 100 characters"
              maxLength={100}
              showCount
              variant="outlined"
            />

            <Input 
              label="Error State" 
              placeholder="Invalid input"
              error="This field is required"
              value="Invalid value"
            />

            <Input 
              label="Disabled Input" 
              placeholder="You cannot edit this field"
              value="Disabled value"
              disabled
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-neutral-900">
            Testimonials
          </Typography>
          <div className="grid gap-8 md:grid-cols-2">
            <Testimonial 
              variant="default"
              content="This company transformed our digital presence. Their team was professional, responsive, and delivered beyond our expectations."
              author={{
                name: "Sarah Johnson",
                title: "Marketing Director",
                company: "TechCorp Inc.",
                image: "https://randomuser.me/api/portraits/women/12.jpg"
              }}
              rating={5}
            />

            <Testimonial 
              variant="card"
              content="The development process was smooth from start to finish. They understood our requirements perfectly and delivered on time."
              author={{
                name: "Michael Chen",
                title: "CTO",
                company: "Startup XYZ",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              }}
              rating={4}
            />

            <Testimonial 
              variant="minimal"
              content="Working with this team was a pleasure. They were always available for questions and quick to resolve any issues."
              author={{
                name: "Emma Wilson",
                title: "Product Owner",
                company: "Creative Solutions",
                image: "https://randomuser.me/api/portraits/women/23.jpg"
              }}
              rating={0}
            />

            <Testimonial 
              variant="feature"
              content="The solution they built has increased our conversion rate by 40%. Incredible work that has directly impacted our bottom line."
              author={{
                name: "David Rodriguez",
                title: "E-commerce Manager",
                company: "Global Retail",
                image: "https://randomuser.me/api/portraits/men/45.jpg"
              }}
              rating={5}
              animateIn
            />
          </div>
        </section>

        {/* Modal */}
        <section className="mb-20">
          <Typography as="h2" className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-neutral-900">
            Modal
          </Typography>
          <div className="bg-neutral-50 p-8 rounded-xl text-center">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            
            <Modal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
              size="md"
              variant="default"
              footer={
                <div className="flex justify-end space-x-3">
                  <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </div>
              }
            >
              <Typography as="p" className="text-neutral-700 mb-4">
                This is an example modal dialog that can be used for confirmations, forms, or displaying information.
              </Typography>
              
              <Input 
                label="Sample Input in Modal" 
                placeholder="Enter some text"
              />
            </Modal>
          </div>
        </section>
      </div>
    </main>
  );
} 