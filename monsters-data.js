/* ============================================================
   SOUL'S REMNANT — BESTIARY DATA FILE
   ============================================================
   This is the only file you need to touch to add or update
   monsters. Copy an existing entry, change the values, and
   save. The site rebuilds itself from this list automatically
   — no other code needs to change.

   FIELD GUIDE
   ------------------------------------------------------------
   id            unique short code, no spaces (e.g. "slime_01")
   name          display name
   level         number — still shown in the left-hand list
   hp            number, or null — kept for reference/search only;
                 not displayed since the image covers it
   locations     array of strings — zones/maps it spawns in
   notes         optional string — strategy tips, quirks, etc.
                 (use "" if none)
   image         path to a single screenshot/graphic covering
                 everything about the monster — info card (LV,
                 HP, MP, ATK, DEF, SPD) plus its drop table.
                 This image IS the whole top section of the
                 entry — shown as-is, full width. Leave null to
                 show a placeholder box instead.
   ============================================================ */

const MONSTERS = [
  {
    id: "template_bubble_spirit",
    name: "Bubble Spirit",
    level: 3,
    locations: ["Outskirts Flowerfield"],
    notes: "Drops Stone Orb",
    image: "images/bubble-spirit.png"
  },
  {
    id: "template_jel",
    name: "Jel",
    level: 5,
    locations: ["Outskirts Flowerfield"],
    notes: "Drops Copper Shield",
    image: "images/jel.png"
  },
  {
    id: "template_flows",
    name: "Flows",
    level: 6,
    locations: ["Outskirts North"],
    notes: "Drops Copper Shield",
    image: "images/flows.png"
  },
  {
    id: "template_pin_pin",
    name: "Pin Pin",
    level: 7,
    locations: ["Outskirts Southeast"],
    notes: "Drops Copper Orb",
    image: "images/pin-pin.png"
  },
  {
    id: "template_slip",
    name: "Slip",
    level: 8,
    locations: ["Outskirts Pond"],
    notes: "Drops Copper Orb",
    image: "images/slip.png"
  },
  {
    id: "template_glowsnail",
    name: "Glowsnail",
    level: 10,
    locations: ["Outskirts Southwest"],
    notes: "Drops Stone Orb",
    image: "images/glowsnail.png"
  },
  {
    id: "template_snapper",
    name: "Snapper",
    level: 18,
    locations: ["x"],
    notes: "Drops Quartz Orb, Iron Shield",
    image: "images/snapper.png"
  },
  {
    id: "template_crusher",
    name: "Crusher",
    level: 20,
    locations: ["x"],
    notes: "Drops Iron Orb",
    image: "images/crusher.png"
  },
  {
    id: "template_bananek",
    name: "Bananek",
    level: 23,
    locations: ["x"],
    notes: "Drops Petrified Orb",
    image: "images/bananek.png"
  },
  {
    id: "template_dark_pumpkin",
    name: "Dark Pumpkin",
    level: 30,
    locations: ["x"],
    notes: "Drops Petrified Orb, Stinky Orb",
    image: "images/dark-pumpkin.png"
  },
  {
    id: "template_shadow_sprite",
    name: "Shadow Sprite",
    level: 30,
    locations: ["x"],
    notes: "Drops Petrified Shield",
    image: "images/shadow-sprite.png"
  },
  {
    id: "template_stinky_sheep",
    name: "Stinky Sheep",
    level: 32,
    locations: ["x"],
    notes: "Drops Stinky Shield",
    image: "images/stinky-sheep.png"
  },
  {
    id: "template_spot_slime",
    name: "Spot Slime",
    level: 34,
    locations: ["x"],
    notes: "Drops Stinky Shield",
    image: "images/spot-slime.png"
  },
  {
    id: "template_humblebee",
    name: "Humblebee",
    level: 38,
    locations: ["x"],
    notes: "Drops Eerie Shield",
    image: "images/humblebee.png"
  },
  {
    id: "template_soulpling",
    name: "Soulpling",
    level: 39,
    locations: ["x"],
    notes: "Drops Eerie Orb",
    image: "images/soulpling.png"
  },
  {
    id: "template_ferni",
    name: "Ferni",
    level: 40,
    locations: ["x"],
    notes: "Drops Eerie Orb",
    image: "images/ferni.png"
  },
  {
    id: "template_soultree",
    name: "Soultree",
    level: 42,
    locations: ["x"],
    notes: "Drops Deep Orb",
    image: "images/soultree.png"
  }
];
