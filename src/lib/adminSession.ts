export const ADMIN_EMAIL = "admin@company.com";

const SESSION_KEY = "dbc-admin-session";

export interface AdminSession {
  email: string;
  isAdmin: true;
}

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function isAdminEmail(email: string) {
  return email.trim().toLowerCase() === ADMIN_EMAIL;
}

export function getAdminSession(): AdminSession | null {
  if (!canUseStorage()) {
    return null;
  }

  const storedSession = window.localStorage.getItem(SESSION_KEY);

  if (!storedSession) {
    return null;
  }

  try {
    const parsedSession = JSON.parse(storedSession) as AdminSession;

    return parsedSession?.isAdmin ? parsedSession : null;
  } catch {
    return null;
  }
}

export function setAdminSession(email: string) {
  if (!canUseStorage()) {
    return;
  }

  const session: AdminSession = {
    email,
    isAdmin: true,
  };

  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
}