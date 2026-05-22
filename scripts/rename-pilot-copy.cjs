const fs = require("fs");
const path = require("path");

const roots = ["app", "components"];

const replacements = [
  ["Pilot Deployment", "Research Access"],
  ["Join the Neurovenus pilot program.", "Request access to Neurovenus."],
  ["Request Pilot Access", "Request Access"],
  ["Submit Pilot Request", "Submit Research Inquiry"],
  ["Pilot Request Received", "Research Access Request Received"],
  ["New Neurovenus Pilot Request", "New Neurovenus Research Access Request"],
  ["New Pilot Request", "New Research Access Request"],
  ["Pilot request submitted successfully.", "Research inquiry submitted successfully."],
  ["Failed to submit pilot request.", "Failed to submit research inquiry."],
  ["pilot availability", "access availability"],
  ["pilot interest", "research access interest"],
  ["pilot deployment", "research access"],
  ["Pilot collaboration opportunities", "Research collaboration opportunities"],
  ["/api/pilot-request", "/api/access-request"],
  ["pilot-request", "access-request"],
  ["Pilot Access", "Research Access"],
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, files);
    } else if (/\.(tsx|ts|js|jsx)$/.test(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

for (const root of roots) {
  for (const file of walk(root)) {
    let content = fs.readFileSync(file, "utf8");
    let updated = content;

    for (const [from, to] of replacements) {
      updated = updated.split(from).join(to);
    }

    if (updated !== content) {
      fs.writeFileSync(file, updated);
      console.log(`Updated: ${file}`);
    }
  }
}