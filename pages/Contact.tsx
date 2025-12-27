
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12 lg:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-center text-nordic-blue">Find Your Way to Us</h1>
        <p className="mt-4 text-center text-lg text-text-muted-light dark:text-text-muted-dark max-w-3xl mx-auto">
          We're located in the heart of Hanoi, ready to welcome you with the best of North European cuisine. Get in touch or visit us during our opening hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg bg-white dark:bg-background-dark p-4 border border-solid border-border-light dark:border-border-dark min-h-[72px] shadow-sm">
              <div className="text-nordic-blue flex items-center justify-center rounded-lg bg-nordic-blue/10 shrink-0 size-12">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-semibold leading-normal line-clamp-1">Address</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal line-clamp-2">123 P. Hàng Bông, Hàng Gai, Hoàn Kiếm, Hà Nội, Vietnam</p>
              </div>
              <a className="shrink-0 text-sm font-medium text-nordic-blue hover:underline" href="#">Get Directions</a>
            </div>

            <div className="flex items-center gap-4 rounded-lg bg-white dark:bg-background-dark p-4 border border-solid border-border-light dark:border-border-dark min-h-[72px] shadow-sm">
              <div className="text-nordic-blue flex items-center justify-center rounded-lg bg-nordic-blue/10 shrink-0 size-12">
                <span className="material-symbols-outlined text-2xl">phone</span>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-semibold leading-normal line-clamp-1">Phone</p>
                <a className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal line-clamp-2 hover:text-nordic-blue transition-colors" href="tel:+84123456789">+84 123 456 789</a>
              </div>
              <button aria-label="Copy phone number" className="shrink-0">
                <div className="text-text-light dark:text-text-dark flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined text-xl">content_copy</span>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-4 rounded-lg bg-white dark:bg-background-dark p-4 border border-solid border-border-light dark:border-border-dark min-h-[72px] shadow-sm">
              <div className="text-nordic-blue flex items-center justify-center rounded-lg bg-nordic-blue/10 shrink-0 size-12">
                <span className="material-symbols-outlined text-2xl">email</span>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-semibold leading-normal line-clamp-1">Email</p>
                <a className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal line-clamp-2 hover:text-nordic-blue transition-colors" href="mailto:hello@nordichanoi.vn">hello@nordichanoi.vn</a>
              </div>
              <button aria-label="Copy email address" className="shrink-0">
                <div className="text-text-light dark:text-text-dark flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined text-xl">content_copy</span>
                </div>
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-white dark:bg-background-dark p-6 border border-solid border-border-light dark:border-border-dark shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-nordic-blue text-2xl">schedule</span>
              Operating Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border-light dark:border-border-dark pb-2">
                <span>Tuesday - Friday</span>
                <span className="font-medium">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-border-light dark:border-border-dark pb-2">
                <span>Saturday - Sunday</span>
                <span className="font-medium">10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="font-medium text-red-600 dark:text-red-400">Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-center lg:text-left">Follow Us</h3>
            <div className="flex justify-center lg:justify-start gap-4">
              {['facebook', 'instagram', 'tripadvisor'].map((social) => (
                <a 
                  key={social}
                  aria-label={social} 
                  className="flex items-center justify-center size-10 rounded-full bg-gray-200/60 dark:bg-gray-700/60 hover:bg-nordic-blue/20 dark:hover:bg-nordic-blue/30 transition-colors" 
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full min-h-[400px] lg:min-h-full rounded-xl overflow-hidden shadow-lg border border-border-light dark:border-border-dark">
          <iframe 
            allowFullScreen 
            height="100%" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0969680393693!2d105.84809231535805!3d21.02881689280998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953229b19b%3A0x22b28b7863116682!2sHoan%20Kiem%20Lake!5e0!3m2!1sen!2svn!4v1678886450123!5m2!1sen!2svn" 
            style={{ border: 0 }} 
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
