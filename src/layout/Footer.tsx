export default function Footer() {
  return (
    <footer className='mt-12 border-t backdrop-blur bg-primary-soft_light dark:bg-primary-soft_dark/60 border-accent-soft_light/60 dark:border-accent-soft_dark/60'>
      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
              Lilith Luce
            </h3>
            <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>
              Full-Stack Software Developer
            </p>
          </div>

          <nav aria-label='Footer navigation' className='flex flex-wrap items-center gap-4'>
            <a
              href='/projects'
              className='text-sm text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors'>
              Projects
            </a>
            <a
              href='/contact'
              className='text-sm text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors'>
              Contact
            </a>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
              className='text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors'>
              GitHub
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noreferrer'
              className='text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors'>
              LinkedIn
            </a>
          </nav>
        </div>

        <div className='mt-8 border-t border-slate-100 dark:border-slate-800 pt-6'>
          <p className='text-center text-sm text-slate-500 dark:text-slate-400'>
            © {new Date().getFullYear()} Lilith Luce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
