export function setRootStyle(key: string, value: string | null) {
  (document.querySelector(":root") as any).style.setProperty(key, value);
}

export function getRootStyle(key: string) {
  return getComputedStyle(document.querySelector(":root")).getPropertyValue(key)
}