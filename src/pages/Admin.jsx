import React, { useState } from 'react';
import {
  Inbox,
  BookOpen,
  Briefcase,
  Settings,
  Plus,
  Trash2,
  CheckCircle2,
  Mail,
  Download,
  Eye,
  RefreshCw,
  ExternalLink,
  Edit3
} from 'lucide-react';
import {
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
  getInsights,
  saveInsights,
  getProjects,
  saveProjects,
  getCompanyInfo,
  saveCompanyInfo,
  resetToDefaults
} from '../data/storage';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState(getInquiries());
  const [insights, setInsights] = useState(getInsights());
  const [projects, setProjects] = useState(getProjects());
  const [companyInfo, setCompanyInfo] = useState(getCompanyInfo());

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  // New Article Form state
  const [showNewArticleModal, setShowNewArticleModal] = useState(false);
  const [articleForm, setArticleForm] = useState({
    title: '',
    category: 'BUSINESS',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    author: 'Lylyas Editorial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    excerpt: '',
    content: ''
  });

  // New Project Form state
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Business Solutions',
    year: '2026',
    clientType: '',
    summary: '',
    servicesText: '',
    results: '',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
  });

  // Notification Banner
  const [notification, setNotification] = useState('');
  const triggerNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  // Inquiry actions
  const handleStatusChange = (id, newStatus) => {
    const updated = updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
    triggerNotification('Inquiry status updated');
  };

  const handleDeleteInquiry = (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      const updated = deleteInquiry(id);
      setInquiries(updated);
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
      triggerNotification('Inquiry removed');
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID,Date,Full Name,Company,Email,Country,Reason,Subject,Status'];
    const rows = inquiries.map(i =>
      `"${i.id}","${i.date}","${i.fullName}","${i.company}","${i.email}","${i.country}","${i.reason}","${i.subject}","${i.status}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `lylyas_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Article creation
  const handleSaveArticle = (e) => {
    e.preventDefault();
    const newArticle = {
      id: articleForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      ...articleForm
    };
    const updated = [newArticle, ...insights];
    setInsights(updated);
    saveInsights(updated);
    setShowNewArticleModal(false);
    triggerNotification('New insight article published to website!');
  };

  const handleDeleteArticle = (id) => {
    if (window.confirm('Delete this article from the Insights page?')) {
      const updated = insights.filter(a => a.id !== id);
      setInsights(updated);
      saveInsights(updated);
      triggerNotification('Article deleted');
    }
  };

  // Project creation
  const handleSaveProject = (e) => {
    e.preventDefault();
    const newProj = {
      id: `proj-${Date.now()}`,
      title: projectForm.title,
      category: projectForm.category,
      year: projectForm.year,
      clientType: projectForm.clientType,
      summary: projectForm.summary,
      results: projectForm.results,
      services: projectForm.servicesText.split(',').map(s => s.trim()).filter(Boolean),
      image: projectForm.image
    };
    const updated = [newProj, ...projects];
    setProjects(updated);
    saveProjects(updated);
    setShowNewProjectModal(false);
    triggerNotification('New project added to Projects portfolio!');
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Delete this project?')) {
      const updated = projects.filter(p => p.id !== id);
      setProjects(updated);
      saveProjects(updated);
      triggerNotification('Project deleted');
    }
  };

  // Company settings save
  const handleSaveCompany = (e) => {
    e.preventDefault();
    saveCompanyInfo(companyInfo);
    triggerNotification('Company details & SEO settings saved!');
  };

  const filteredInquiries = statusFilter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === statusFilter);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A2622] py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#E3ECE5] gap-4">
          <div>
            <div className="text-xs font-mono text-[#2D6A4F] uppercase tracking-widest">
              MANAGEMENT PORTAL
            </div>
            <h1 className="text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Lylyas Global Admin Console
            </h1>
            <p className="text-xs sm:text-sm text-[#52605B] mt-1 font-light">
              Manage client inquiries, publish insights, update projects, and configure corporate settings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset all demo content to original factory defaults?')) {
                  resetToDefaults();
                  window.location.reload();
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#E3ECE5] hover:border-rose-400 text-xs text-[#52605B] hover:text-rose-600 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Defaults
            </button>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#1B4332] text-white text-xs font-semibold hover:bg-[#22543E] transition-colors flex items-center gap-1.5"
            >
              View Live Site <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="mt-4 p-3 bg-emerald-800 text-white text-xs font-semibold rounded-xl text-center shadow-lg animate-fadeIn">
            {notification}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-[#E3ECE5] pb-4">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'inquiries'
                ? 'bg-[#1B4332] text-white shadow'
                : 'bg-white text-[#52605B] border border-[#E3ECE5] hover:border-[#2D6A4F]'
            }`}
          >
            <Inbox className="w-4 h-4" />
            Inquiries ({inquiries.filter(i => i.status === 'new').length} New)
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'insights'
                ? 'bg-[#1B4332] text-white shadow'
                : 'bg-white text-[#52605B] border border-[#E3ECE5] hover:border-[#2D6A4F]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Insights ({insights.length})
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'projects'
                ? 'bg-[#1B4332] text-white shadow'
                : 'bg-white text-[#52605B] border border-[#E3ECE5] hover:border-[#2D6A4F]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Projects ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('company')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'company'
                ? 'bg-[#1B4332] text-white shadow'
                : 'bg-white text-[#52605B] border border-[#E3ECE5] hover:border-[#2D6A4F]'
            }`}
          >
            <Settings className="w-4 h-4" />
            Company & SEO
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: INQUIRIES MANAGEMENT                               */}
        {/* ========================================================= */}
        {activeTab === 'inquiries' && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#52605B]">Filter:</span>
                {['all', 'new', 'reviewed'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`text-xs px-3 py-1 rounded-lg capitalize font-medium ${
                      statusFilter === s
                        ? 'bg-[#1B4332] text-white'
                        : 'bg-white border border-[#E3ECE5] text-[#52605B]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] bg-white border border-[#E3ECE5] hover:border-[#2D6A4F] px-4 py-2 rounded-xl transition-colors"
              >
                <Download className="w-4 h-4 text-[#2D6A4F]" /> Export to CSV
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Inquiry List */}
              <div className="lg:col-span-5 space-y-3">
                {filteredInquiries.length === 0 ? (
                  <div className="p-8 text-center bg-white border border-[#E3ECE5] rounded-2xl text-xs text-[#52605B]">
                    No inquiries in this view.
                  </div>
                ) : (
                  filteredInquiries.map((inq) => {
                    const isSelected = selectedInquiry?.id === inq.id;
                    return (
                      <div
                        key={inq.id}
                        onClick={() => setSelectedInquiry(inq)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#2D6A4F] shadow-md ring-1 ring-[#2D6A4F]'
                            : 'bg-white border-[#E3ECE5] hover:border-[#2D6A4F]/70 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                            inq.status === 'new'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {inq.status}
                          </span>
                          <span className="text-[10px] text-[#8A9A94] font-mono">
                            {new Date(inq.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-[#1B4332]">
                          {inq.fullName}
                        </h4>
                        <div className="text-xs text-[#2D6A4F] font-medium">{inq.company}</div>
                        <div className="text-xs text-[#52605B] mt-1 line-clamp-1">{inq.subject}</div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Inquiry Detail View */}
              <div className="lg:col-span-7">
                {selectedInquiry ? (
                  <div className="bg-white border border-[#E3ECE5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-start justify-between border-b border-[#E3ECE5] pb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D6A4F]">
                          {selectedInquiry.reason}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
                          {selectedInquiry.subject}
                        </h3>
                        <div className="text-xs text-[#8A9A94] mt-1 font-mono">
                          Received: {new Date(selectedInquiry.date).toLocaleString()}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStatusChange(
                            selectedInquiry.id,
                            selectedInquiry.status === 'new' ? 'reviewed' : 'new'
                          )}
                          className={`text-xs px-3 py-1.5 rounded-xl font-semibold border transition-colors ${
                            selectedInquiry.status === 'new'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                              : 'bg-gray-50 text-gray-700 border-gray-300'
                          }`}
                        >
                          Mark as {selectedInquiry.status === 'new' ? 'Reviewed' : 'New'}
                        </button>
                        <button
                          onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs bg-[#FAF9F6] p-4 rounded-2xl border border-[#E3ECE5]">
                      <div>
                        <span className="text-[#8A9A94] uppercase tracking-wider block">Full Name</span>
                        <span className="font-semibold text-[#1B4332] text-sm">{selectedInquiry.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[#8A9A94] uppercase tracking-wider block">Company</span>
                        <span className="font-semibold text-[#1B4332] text-sm">{selectedInquiry.company}</span>
                      </div>
                      <div>
                        <span className="text-[#8A9A94] uppercase tracking-wider block">Email</span>
                        <a
                          href={`mailto:${selectedInquiry.email}`}
                          className="font-mono text-[#1B4332] hover:text-[#2D6A4F] underline"
                        >
                          {selectedInquiry.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-[#8A9A94] uppercase tracking-wider block">Country</span>
                        <span className="font-semibold text-[#1B4332]">{selectedInquiry.country}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[#2D6A4F] mb-2">
                        Inquiry Message
                      </h4>
                      <p className="text-sm text-[#3A4A45] leading-relaxed whitespace-pre-line p-4 rounded-2xl bg-[#FAF9F6] border border-[#E3ECE5]">
                        {selectedInquiry.message}
                      </p>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <a
                        href={`mailto:${selectedInquiry.email}?subject=RE: ${encodeURIComponent(selectedInquiry.subject)}`}
                        className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#22543E] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#2D6A4F]" />
                        Reply to Client via Email
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[#E3ECE5] rounded-3xl p-12 text-center text-xs text-[#52605B]">
                    Select an inquiry from the left to view detailed message parameters and reply.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INSIGHTS ARTICLES                                  */}
        {/* ========================================================= */}
        {activeTab === 'insights' && (
          <div className="mt-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-serif font-bold text-[#1B4332]">
                Published Insights ({insights.length})
              </h3>
              <button
                onClick={() => setShowNewArticleModal(true)}
                className="inline-flex items-center gap-1.5 bg-[#1B4332] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#22543E] transition-colors"
              >
                <Plus className="w-4 h-4 text-[#2D6A4F]" /> Add New Article
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((art) => (
                <div key={art.id} className="bg-white border border-[#E3ECE5] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                  <div>
                    <img src={art.image} alt={art.title} className="h-40 w-full object-cover" />
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-bold text-[#2D6A4F] uppercase">{art.category}</span>
                      <h4 className="font-serif font-bold text-base text-[#1B4332]">{art.title}</h4>
                      <p className="text-xs text-[#52605B] line-clamp-2">{art.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 flex justify-between items-center border-t border-[#FAF9F6]">
                    <span className="text-[10px] text-[#8A9A94] font-mono">{art.date}</span>
                    <button
                      onClick={() => handleDeleteArticle(art.id)}
                      className="text-xs text-rose-600 hover:text-rose-800 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PROJECTS                                           */}
        {/* ========================================================= */}
        {activeTab === 'projects' && (
          <div className="mt-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-serif font-bold text-[#1B4332]">
                Case Studies & Projects ({projects.length})
              </h3>
              <button
                onClick={() => setShowNewProjectModal(true)}
                className="inline-flex items-center gap-1.5 bg-[#1B4332] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#22543E] transition-colors"
              >
                <Plus className="w-4 h-4 text-[#2D6A4F]" /> Add New Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-white border border-[#E3ECE5] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase text-[#2D6A4F]">{proj.category}</span>
                      <span className="text-xs font-mono text-[#8A9A94]">{proj.year}</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#1B4332]">{proj.title}</h4>
                    <p className="text-xs text-[#52605B]">{proj.summary}</p>
                    {proj.results && (
                      <div className="text-xs text-[#1B4332] font-medium bg-[#FAF9F6] p-2.5 rounded-lg border border-[#E3ECE5]">
                        Outcome: {proj.results}
                      </div>
                    )}
                  </div>
                  <div className="px-6 py-4 border-t border-[#FAF9F6] flex justify-end">
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="text-xs text-rose-600 hover:text-rose-800 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: COMPANY & SEO SETTINGS                             */}
        {/* ========================================================= */}
        {activeTab === 'company' && (
          <div className="mt-8 max-w-3xl bg-white border border-[#E3ECE5] rounded-3xl p-8 shadow-sm">
            <form onSubmit={handleSaveCompany} className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#1B4332]">
                Company Information & Global Settings
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Company Legal Name</label>
                  <input
                    type="text"
                    value={companyInfo.name}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Primary Email</label>
                  <input
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Headline Tagline</label>
                <input
                  type="text"
                  value={companyInfo.tagline}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, tagline: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Company Description & SEO Meta</label>
                <textarea
                  rows={3}
                  value={companyInfo.description}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Entity Jurisdiction</label>
                  <input
                    type="text"
                    value={companyInfo.registration}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, registration: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Location</label>
                  <input
                    type="text"
                    value={companyInfo.location}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E3ECE5] flex justify-end">
                <button
                  type="submit"
                  className="bg-[#1B4332] hover:bg-[#22543E] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

      </div>

      {/* New Article Modal */}
      {showNewArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E3ECE5]">
            <h3 className="text-2xl font-serif font-bold text-[#1B4332] mb-4">Add New Insight Article</h3>
            <form onSubmit={handleSaveArticle} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Article Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navigating Cross-Border Commerce in 2026"
                  value={articleForm.title}
                  onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Category</label>
                  <select
                    value={articleForm.category}
                    onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  >
                    <option value="BUSINESS">BUSINESS</option>
                    <option value="DIGITAL">DIGITAL</option>
                    <option value="E-COMMERCE">E-COMMERCE</option>
                    <option value="PROFESSIONAL">PROFESSIONAL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Read Time</label>
                  <input
                    type="text"
                    value={articleForm.readTime}
                    onChange={(e) => setArticleForm({ ...articleForm, readTime: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Featured Image URL</label>
                <input
                  type="url"
                  required
                  value={articleForm.image}
                  onChange={(e) => setArticleForm({ ...articleForm, image: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Short Excerpt</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Brief summary that appears in article cards"
                  value={articleForm.excerpt}
                  onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Full Content (Markdown supported)</label>
                <textarea
                  rows={6}
                  required
                  placeholder="Use ### for section headings and double enters for paragraphs"
                  value={articleForm.content}
                  onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm font-mono"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E3ECE5]">
                <button
                  type="button"
                  onClick={() => setShowNewArticleModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-[#52605B] border border-[#E3ECE5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1B4332] text-white text-xs font-semibold rounded-xl hover:bg-[#22543E]"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E3ECE5]">
            <h3 className="text-2xl font-serif font-bold text-[#1B4332] mb-4">Add New Case Study</h3>
            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Category</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  >
                    <option value="Business Solutions">Business Solutions</option>
                    <option value="Digital Services">Digital Services</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Professional Services">Professional Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Year</label>
                  <input
                    type="text"
                    value={projectForm.year}
                    onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Client Focus</label>
                <input
                  type="text"
                  placeholder="e.g. Cross-Border Retail Group"
                  value={projectForm.clientType}
                  onChange={(e) => setProjectForm({ ...projectForm, clientType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Summary</label>
                <textarea
                  rows={2}
                  required
                  value={projectForm.summary}
                  onChange={(e) => setProjectForm({ ...projectForm, summary: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Services Delivered (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Store Architecture, Payment Gateways, Logistics"
                  value={projectForm.servicesText}
                  onChange={(e) => setProjectForm({ ...projectForm, servicesText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Outcome / Results</label>
                <input
                  type="text"
                  placeholder="e.g. +140% Sales growth, 4 markets opened"
                  value={projectForm.results}
                  onChange={(e) => setProjectForm({ ...projectForm, results: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] uppercase mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E3ECE5] rounded-xl text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E3ECE5]">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-[#52605B] border border-[#E3ECE5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1B4332] text-white text-xs font-semibold rounded-xl hover:bg-[#22543E]"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
