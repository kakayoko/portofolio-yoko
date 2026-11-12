import React, { useState } from 'react';
import { CV_DATA } from '../data/cvData';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  Printer, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  CheckCircle, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Wrench,
  MessageCircle,
  FileText,
  Eye,
  ExternalLink,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface CVViewProps {
  onBackToHome: () => void;
  lang?: Language;
}

export const CVView: React.FC<CVViewProps> = ({ onBackToHome, lang = 'id' }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');
  const t = TRANSLATIONS[lang].cv;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Kaka Yoko (${CV_DATA.fullName}), I viewed your CV on ${CV_DATA.domain} and would like to discuss potential project opportunities.`
        : `Halo Kaka Yoko (${CV_DATA.fullName}), saya telah melihat CV Anda di ${CV_DATA.domain} dan ingin berdiskusi mengenai kualifikasi / kerja sama proyek.`
    );
    window.open(`https://wa.me/6282398581997?text=${text}`, '_blank');
  };

  return (
    <div className="py-6 sm:py-10 bg-slate-100/70 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200">
      
      {/* Top Action & Navigation Bar (Screen only, hidden on print) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 no-print">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer self-start sm:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>

          {/* Mode Switcher: Interactive Web View vs Original PDF Document */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.interactiveTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeTab === 'pdf'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t.pdfTab}</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* Primary Direct Download Button */}
            <a
              href={CV_DATA.pdfUrl}
              download={CV_DATA.pdfFilename}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadBtn}</span>
            </a>

            <button
              onClick={handlePrint}
              aria-label={t.printBtn}
              className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 rounded-lg transition cursor-pointer"
              title={t.printBtn}
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="p-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition cursor-pointer"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quick Notice Banner */}
        <div className="mt-3 px-4 py-2.5 bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-900/50 rounded-xl flex items-center justify-between text-xs text-teal-900 dark:text-teal-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>{t.pdfBanner}: <strong>{CV_DATA.pdfFilename}</strong></span>
          </div>
          <a
            href={CV_DATA.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-teal-700 dark:hover:text-teal-300 shrink-0 flex items-center gap-1"
          >
            <span>{t.pdfOpenNewTab}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* VIEW MODE 1: Embedded Original PDF Viewer */}
      {activeTab === 'pdf' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 no-print">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-4 sm:p-6 space-y-4">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  {t.pdfPreviewTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.pdfPreviewSub}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CV_DATA.pdfUrl}
                  download={CV_DATA.pdfFilename}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadBtn}</span>
                </a>

                <a
                  href={CV_DATA.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 rounded-lg transition flex items-center gap-1"
                >
                  <span>{lang === 'en' ? 'Full Screen' : 'Layar Penuh'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded PDF iframe / object */}
            <div className="w-full h-[750px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <iframe
                src={`${CV_DATA.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Curriculum Vitae Dwi Priyoko Takasihaeng"
                className="w-full h-full border-0"
              />
            </div>

            <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
              {t.pdfFallback}{' '}
              <a
                href={CV_DATA.pdfUrl}
                download={CV_DATA.pdfFilename}
                className="text-teal-600 dark:text-teal-400 font-semibold underline"
              >
                {t.downloadBtn}
              </a>.
            </div>

          </div>
        </div>
      )}

      {/* VIEW MODE 2: Comprehensive Interactive & Printable Web Resume */}
      {activeTab === 'interactive' && (
        <main className="cv-print-container max-w-5xl mx-auto bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 sm:rounded-2xl p-6 sm:p-12 transition-colors">
          
          {/* CV Header: Profile & Bio */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            
            {/* Official Profile Photo */}
            <div className="relative w-32 h-40 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-2 border-teal-600 dark:border-teal-500 shadow-sm shrink-0 bg-slate-100 dark:bg-slate-800">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-07-04_at_15.26.41_fdc9eb2d.jpeg"
                alt={CV_DATA.fullName}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Name & Contact Details */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {CV_DATA.fullName}
                </h1>
                <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                  (Dwi Priyoko / {CV_DATA.nickname})
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                {CV_DATA.tagline}
              </p>

              {/* Contact details row */}
              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-y-2 gap-x-5 text-xs text-slate-600 dark:text-slate-400">
                <a 
                  href={`https://wa.me/6282398581997`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>{CV_DATA.phone}</span>
                </a>

                <a 
                  href={`mailto:${CV_DATA.email}`} 
                  className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-600" />
                  <span>{CV_DATA.email}</span>
                </a>

                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>{CV_DATA.location}</span>
                </span>

                <a 
                  href="https://www.kakayoko.my.id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 font-mono text-teal-700 dark:text-teal-300 hover:underline"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{CV_DATA.domain}</span>
                </a>
              </div>

              {/* Languages */}
              <div className="pt-2 flex flex-wrap justify-center sm:justify-start items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Bahasa:</span>
                {CV_DATA.languages.map((lang, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <span>{lang.name} ({lang.proficiency})</span>
                    {idx < CV_DATA.languages.length - 1 && <span className="text-slate-300 dark:text-slate-600">·</span>}
                  </span>
                ))}
              </div>

              {/* Download badge banner inside document */}
              <div className="pt-3 no-print">
                <a
                  href={CV_DATA.pdfUrl}
                  download={CV_DATA.pdfFilename}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold hover:bg-teal-100 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Berkas Asli ({CV_DATA.pdfFilename})</span>
                </a>
              </div>

            </div>

          </div>

          {/* Section: Profil Singkat */}
          <section className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Profil Singkat
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {CV_DATA.summary}
            </p>

            {/* Core Competencies badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {CV_DATA.coreCompetencies.map((comp, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  • {comp}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Pengalaman Kerja */}
          <section className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Pengalaman Kerja
            </h2>

            <div className="space-y-8">
              {CV_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-teal-500/30 dark:border-teal-400/20 space-y-2">
                  {/* Timeline node */}
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400 border-2 border-white dark:border-slate-900" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex flex-wrap items-center gap-2">
                    <span className="text-teal-700 dark:text-teal-400">{exp.organization}</span>
                    <span aria-hidden="true" className="text-slate-400">|</span>
                    <span>{exp.location}</span>
                    {exp.type && (
                      <>
                        <span aria-hidden="true" className="text-slate-400">|</span>
                        <span className="italic text-slate-500 dark:text-slate-400">{exp.type}</span>
                      </>
                    )}
                  </div>

                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Pendidikan & Sertifikasi (2 Columns) */}
          <section className="py-6 border-b border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Pendidikan */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Pendidikan
                </h2>

                <div className="space-y-4">
                  {CV_DATA.education.map((edu, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850">
                      <div className="flex justify-between items-baseline">
                        <div className="font-bold text-slate-900 dark:text-white text-sm">
                          {edu.degree}
                        </div>
                        <span className="font-mono text-xs text-teal-700 dark:text-teal-400 font-semibold">{edu.year}</span>
                      </div>
                      <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                        {edu.institution}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {edu.location}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sertifikasi */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Sertifikasi & Lisensi
                </h2>

                <div className="space-y-2.5">
                  {CV_DATA.certifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-850 text-xs">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          ✓ {cert.name}
                        </span>
                        <span className="font-mono text-[11px] text-teal-700 dark:text-teal-400 shrink-0 font-medium">{cert.year}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Section: Matriks Keahlian Teknis */}
          <section className="pt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Keahlian Teknis & Lapangan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CV_DATA.skillCategories.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <h3 className="font-semibold text-xs text-slate-900 dark:text-white uppercase tracking-wide mb-3">
                    {cat.title}
                  </h3>
                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="font-mono text-slate-500 dark:text-slate-400 tabular-nums">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-teal-600 dark:bg-teal-400 h-1.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CV Sign-off Footer */}
          <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div>
              Dokumen Curriculum Vitae resmi diverifikasi oleh <strong className="text-slate-800 dark:text-slate-200">{CV_DATA.fullName}</strong>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={CV_DATA.pdfUrl}
                download={CV_DATA.pdfFilename}
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1 no-print"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF</span>
              </a>
              <span className="font-mono">www.kakayoko.my.id</span>
            </div>
          </div>

        </main>
      )}

    </div>
  );
};
