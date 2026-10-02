import {
  initialCompanyInfo,
  initialServices,
  initialProjects,
  initialInsights,
  initialValues
} from './initialData';

const STORAGE_KEYS = {
  COMPANY: 'lylyas_company_info',
  SERVICES: 'lylyas_services',
  PROJECTS: 'lylyas_projects',
  INSIGHTS: 'lylyas_insights',
  INQUIRIES: 'lylyas_inquiries',
};

const DATA_VERSION_KEY = 'lylyas_data_version';
const CURRENT_VERSION = 'v4_lifestyle_coaching';

// Check version and refresh initial services & company info if outdated
if (typeof window !== 'undefined') {
  try {
    const storedVersion = localStorage.getItem(DATA_VERSION_KEY);
    if (storedVersion !== CURRENT_VERSION) {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(initialServices));
      localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(initialCompanyInfo));
      localStorage.setItem(DATA_VERSION_KEY, CURRENT_VERSION);
    }
  } catch (e) {
    // ignore
  }
}

// Helper for localStorage with fallback
const getStorageItem = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Error reading key ${key} from localStorage:`, e);
    return fallback;
  }
};

const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving key ${key} to localStorage:`, e);
  }
};

export const getCompanyInfo = () => getStorageItem(STORAGE_KEYS.COMPANY, initialCompanyInfo);
export const saveCompanyInfo = (info) => setStorageItem(STORAGE_KEYS.COMPANY, info);

export const getServices = () => getStorageItem(STORAGE_KEYS.SERVICES, initialServices);
export const saveServices = (services) => setStorageItem(STORAGE_KEYS.SERVICES, services);

export const getProjects = () => getStorageItem(STORAGE_KEYS.PROJECTS, initialProjects);
export const saveProjects = (projects) => setStorageItem(STORAGE_KEYS.PROJECTS, projects);

export const getInsights = () => getStorageItem(STORAGE_KEYS.INSIGHTS, initialInsights);
export const saveInsights = (insights) => setStorageItem(STORAGE_KEYS.INSIGHTS, insights);

export const getInquiries = () => getStorageItem(STORAGE_KEYS.INQUIRIES, [
  {
    id: "inq-1",
    fullName: "Arthur Vance",
    company: "Vance Global Partners",
    email: "a.vance@vancepartners.co.uk",
    country: "United Kingdom",
    reason: "Professional Services",
    subject: "Cross-Border Commercial Advisory",
    message: "We are seeking comprehensive corporate support and operational facilitation for expanding our logistics partnerships in North America.",
    date: "2026-09-24T14:22:00.000Z",
    status: "new"
  },
  {
    id: "inq-2",
    fullName: "Elena Rostova",
    company: "Lumina Digital Studio",
    email: "elena@luminastudio.ch",
    country: "Switzerland",
    reason: "E-commerce",
    subject: "Multi-Currency Storefront Scaling",
    message: "Inquiring about your e-commerce management and global checkout optimization services for our European luxury goods catalogue.",
    date: "2026-09-21T09:15:00.000Z",
    status: "reviewed"
  }
]);

export const addInquiry = (inquiry) => {
  const current = getInquiries();
  const updated = [
    {
      id: `inq-${Date.now()}`,
      date: new Date().toISOString(),
      status: "new",
      ...inquiry
    },
    ...current
  ];
  setStorageItem(STORAGE_KEYS.INQUIRIES, updated);
  return updated;
};

export const updateInquiryStatus = (id, status) => {
  const current = getInquiries();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  setStorageItem(STORAGE_KEYS.INQUIRIES, updated);
  return updated;
};

export const deleteInquiry = (id) => {
  const current = getInquiries();
  const updated = current.filter(item => item.id !== id);
  setStorageItem(STORAGE_KEYS.INQUIRIES, updated);
  return updated;
};

export const resetToDefaults = () => {
  localStorage.removeItem(STORAGE_KEYS.COMPANY);
  localStorage.removeItem(STORAGE_KEYS.SERVICES);
  localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  localStorage.removeItem(STORAGE_KEYS.INSIGHTS);
  localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
};
