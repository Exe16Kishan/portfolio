import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Me</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hello!
              I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-indigo-400 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">kishanshukla53@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-indigo-400 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-400">+91 7986051229</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-indigo-400 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400">Jalandhar ,Punjab</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-green-600/20 text-green-400 rounded-md text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}