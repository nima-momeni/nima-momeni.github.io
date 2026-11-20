export const profile = {
  name: 'Nima Momeni',
  initials: 'NM',
  role: 'Electronics Engineering Student',
  location: 'Metro Vancouver, BC',
  university: 'Simon Fraser University',
  headline: 'I design, build, and test engineering systems.',
  summary: 'Electronics engineering student with hands-on experience in electromechanical prototyping, embedded systems, 3-axis CNC milling, sheet-metal fabrication, and test automation. I document the design decisions and practical challenges behind my projects.',
  email: 'hello@example.com',
  linkedin: 'https://www.linkedin.com/in/nima-momeni/',
};

export type Project = {
 slug: string; title: string; category: string; year: string; description: string; cover?: string;
 tags: string[]; challenge: string; approach: string; results: string;
};

// Selected, documented engineering projects.
export const projects: Project[] = [
 {slug:'led-test-gantry',title:'Automated LED Tape Test Gantry',category:'Test Automation',year:'LED Technician',cover:'images/gantry/overview.webp',description:'Designed and validated a dual-carriage LED tape test gantry, plus a clamp-style quick connector that replaced repetitive screw-terminal wiring.',tags:['Fusion 360','3-Axis CNC Milling','Sheet Metal','Motion Control'],challenge:'Replace a labour-intensive LED tape inspection workflow with controlled tape handling and repeatable photometric measurements.',approach:'Designed the carriages, fixed-belt motion system, custom clamp-style multi-channel connector, CNC-machined and sheet-metal parts, homing features, and light-isolated enclosure.',results:'Built and validated the mechanical prototype and optical test enclosure; its effect on the in-house QA workflow was not measured during my co-op.'},
 {slug:'decoder-test-fixtures',title:'Quick-Connect LED Decoder Test Fixtures',category:'QA Test Fixture Design',year:'LED Technician',cover:'images/decoder-testers/four-channel.webp',description:'Designed and deployed 4- and 6-channel decoder test cartridges using pogo-pin contacts, tool-free retention and an integrated LED output check. Used during firmware verification of 200+ units.',tags:['Fusion 360','Test Fixtures','3D Printing','Pogo Pins'],challenge:'Replace repeated screw-terminal setup when verifying decoder channel functionality.',approach:'Used existing conductive terminal-block backing with spring contacts; integrated a retaining cartridge, power switch and LED indicator strip on the supply housing.',results:'Both fixtures were immediately put into use during a firmware-update campaign involving more than 200 units.'}
];
