const WORDS = [
  {w:"resilient", ipa:"/rɪˈzɪl.i.ənt/", pos:"adjective", m:"Able to recover quickly from difficulties; tough and adaptable.", e:"Even after the funding fell through, the team stayed resilient and found another way forward."},
  {w:"articulate", ipa:"/ɑːrˈtɪk.jə.lət/", pos:"adjective", m:"Able to express thoughts and ideas clearly and effectively.", e:"She gave an articulate answer that won over the entire panel."},
  {w:"eloquent", ipa:"/ˈel.ə.kwənt/", pos:"adjective", m:"Fluent and persuasive in speaking or writing.", e:"His eloquent toast left half the room in tears."},
  {w:"ubiquitous", ipa:"/juːˈbɪk.wɪ.təs/", pos:"adjective", m:"Present, appearing, or found everywhere.", e:"Smartphones have become so ubiquitous that a childhood without one feels unimaginable."},
  {w:"meticulous", ipa:"/məˈtɪk.jə.ləs/", pos:"adjective", m:"Showing great attention to detail; very careful and precise.", e:"The auditor's meticulous review caught an error everyone else had missed."},
  {w:"candid", ipa:"/ˈkæn.dɪd/", pos:"adjective", m:"Truthful and straightforward; frank.", e:"I'd rather have a candid opinion than a polite lie."},
  {w:"tenacious", ipa:"/təˈneɪ.ʃəs/", pos:"adjective", m:"Holding firmly to a course of action despite difficulty.", e:"Her tenacious follow-up finally got the client to sign."},
  {w:"ambivalent", ipa:"/æmˈbɪv.ə.lənt/", pos:"adjective", m:"Having mixed feelings or contradictory ideas about something.", e:"He felt ambivalent about the promotion, excited but wary of the extra hours."},
  {w:"pragmatic", ipa:"/præɡˈmæt.ɪk/", pos:"adjective", m:"Dealing with things sensibly and realistically.", e:"Instead of debating theory, she offered a pragmatic fix that shipped by Friday."},
  {w:"cogent", ipa:"/ˈkoʊ.dʒənt/", pos:"adjective", m:"Clear, logical, and convincing.", e:"He made a cogent case for why the deadline should move."},
  {w:"conundrum", ipa:"/kəˈnʌn.drəm/", pos:"noun", m:"A confusing and difficult problem or question.", e:"Balancing cost and quality is the classic conundrum of manufacturing."},
  {w:"nuance", ipa:"/ˈnuː.ɑːns/", pos:"noun", m:"A subtle difference or distinction in meaning, expression, or sound.", e:"A good translator captures nuance, not just literal words."},
  {w:"discerning", ipa:"/dɪˈsɜːr.nɪŋ/", pos:"adjective", m:"Having or showing good judgment, especially about quality.", e:"A discerning reader notices when an argument skips a step."},
  {w:"inadvertent", ipa:"/ˌɪn.ədˈvɜːr.tənt/", pos:"adjective", m:"Not resulting from careful thought; unintentional.", e:"The delay was inadvertent, caused by a scheduling mix-up."},
  {w:"superfluous", ipa:"/suːˈpɜːr.flu.əs/", pos:"adjective", m:"More than is needed; unnecessary.", e:"The report's third summary section felt superfluous."},
  {w:"astute", ipa:"/əˈstuːt/", pos:"adjective", m:"Having sharp judgment; shrewd.", e:"That was an astute observation about the market shift."},
  {w:"amicable", ipa:"/ˈæm.ɪ.kə.bəl/", pos:"adjective", m:"Characterized by friendliness and an absence of discord.", e:"They reached an amicable agreement without needing a lawyer."},
  {w:"equivocal", ipa:"/ɪˈkwɪv.ə.kəl/", pos:"adjective", m:"Open to more than one interpretation; ambiguous.", e:"His equivocal reply left everyone guessing his real opinion."},
  {w:"gregarious", ipa:"/ɡrɪˈɡeər.i.əs/", pos:"adjective", m:"Fond of company; sociable.", e:"Being gregarious by nature, she made friends within minutes of arriving."},
  {w:"incisive", ipa:"/ɪnˈsaɪ.sɪv/", pos:"adjective", m:"Intelligently sharp and direct.", e:"The professor's incisive questions cut straight to the flaw in the argument."},
  {w:"lucid", ipa:"/ˈluː.sɪd/", pos:"adjective", m:"Expressed clearly; easy to understand.", e:"He gave a lucid explanation of a topic most people find confusing."},
  {w:"mitigate", ipa:"/ˈmɪt.ɪ.ɡeɪt/", pos:"verb", m:"To make something less severe or harmful.", e:"Regular backups mitigate the risk of losing your work."},
  {w:"plausible", ipa:"/ˈplɔː.zə.bəl/", pos:"adjective", m:"Seeming reasonable or probable.", e:"It's a plausible explanation, but we should check the data first."},
  {w:"redundant", ipa:"/rɪˈdʌn.dənt/", pos:"adjective", m:"Not needed or useful; superfluous, especially through repetition.", e:"Two of the three warning labels were redundant."},
  {w:"succinct", ipa:"/səkˈsɪŋkt/", pos:"adjective", m:"Expressed clearly and in few words.", e:"Her succinct summary saved the whole meeting ten minutes."},
  {w:"taciturn", ipa:"/ˈtæs.ɪ.tɜːrn/", pos:"adjective", m:"Reserved or uncommunicative in speech.", e:"He stayed taciturn through the entire negotiation, letting silence do the work."},
  {w:"veracity", ipa:"/vəˈræs.ɪ.ti/", pos:"noun", m:"Conformity to facts; truthfulness.", e:"The journalist double-checked every quote to protect the story's veracity."},
  {w:"vindicate", ipa:"/ˈvɪn.dɪ.keɪt/", pos:"verb", m:"To clear someone of blame or suspicion; to prove them correct.", e:"The test results eventually vindicated her original hypothesis."},
  {w:"zealous", ipa:"/ˈzel.əs/", pos:"adjective", m:"Having great energy or enthusiasm for a cause.", e:"The new volunteer was almost too zealous, showing up an hour before everyone else."},
  {w:"benevolent", ipa:"/bəˈnev.ə.lənt/", pos:"adjective", m:"Well-meaning and kindly.", e:"The scholarship came from a benevolent donor who wished to stay anonymous."},
  {w:"congenial", ipa:"/kənˈdʒiː.ni.əl/", pos:"adjective", m:"Pleasant because agreeable to one's taste; friendly.", e:"It was a congenial meeting, with everyone open to compromise."},
  {w:"deference", ipa:"/ˈdef.ər.əns/", pos:"noun", m:"Humble submission and respect.", e:"The junior staff spoke with deference toward the retiring director."},
  {w:"empirical", ipa:"/ɪmˈpɪr.ɪ.kəl/", pos:"adjective", m:"Based on observation or experience rather than theory.", e:"The claim needs empirical support, not just intuition."},
  {w:"facetious", ipa:"/fəˈsiː.ʃəs/", pos:"adjective", m:"Treating a serious subject with deliberately inappropriate humor.", e:"His facetious comment about the deadline didn't land well in the review."},
  {w:"garrulous", ipa:"/ˈɡær.ə.ləs/", pos:"adjective", m:"Excessively talkative, especially about trivial matters.", e:"The garrulous cab driver told me his entire life story before we reached the airport."},
  {w:"hyperbole", ipa:"/haɪˈpɜːr.bə.li/", pos:"noun", m:"Exaggerated statements not meant to be taken literally.", e:"Calling it 'the worst day in history' was pure hyperbole."},
  {w:"idiosyncrasy", ipa:"/ˌɪd.i.oʊˈsɪŋ.krə.si/", pos:"noun", m:"A peculiar habit or quirk unique to a person.", e:"Naming every houseplant is one of her charming idiosyncrasies."},
  {w:"juxtapose", ipa:"/ˈdʒʌk.stə.poʊz/", pos:"verb", m:"To place things side by side for comparison or contrast.", e:"The exhibit juxtaposes old photographs with modern ones of the same street."},
  {w:"laconic", ipa:"/ləˈkɒn.ɪk/", pos:"adjective", m:"Using very few words; terse.", e:"His laconic reply — 'noted' — said more than a paragraph could."},
  {w:"myriad", ipa:"/ˈmɪr.i.əd/", pos:"adjective", m:"An indefinitely large number of something.", e:"The proposal raised a myriad of questions we hadn't considered."},
  {w:"obfuscate", ipa:"/ˈɒb.fə.skeɪt/", pos:"verb", m:"To deliberately make something unclear or hard to understand.", e:"The report used jargon that seemed designed to obfuscate the real numbers."},
  {w:"paradox", ipa:"/ˈpær.ə.dɒks/", pos:"noun", m:"A statement that seems contradictory but may reveal a truth.", e:"It's a paradox that the more choices we get, the harder deciding becomes."},
  {w:"quandary", ipa:"/ˈkwɒn.dər.i/", pos:"noun", m:"A state of uncertainty over what to do in a difficult situation.", e:"She was in a quandary about which job offer to accept."},
  {w:"resolute", ipa:"/ˈrez.ə.luːt/", pos:"adjective", m:"Firm and determined in purpose.", e:"He remained resolute, even as the criticism piled up."},
  {w:"scrutinize", ipa:"/ˈskruː.tɪ.naɪz/", pos:"verb", m:"To examine closely and critically.", e:"Editors scrutinize every sentence before a piece goes to print."},
  {w:"tangential", ipa:"/tænˈdʒen.ʃəl/", pos:"adjective", m:"Only slightly connected to the main subject.", e:"That's a tangential point — let's return to the budget."},
  {w:"unassuming", ipa:"/ˌʌn.əˈsuː.mɪŋ/", pos:"adjective", m:"Not pretentious or arrogant; modest.", e:"For someone so accomplished, she's remarkably unassuming."},
  {w:"vernacular", ipa:"/vərˈnæk.jə.lər/", pos:"noun", m:"The everyday language spoken by ordinary people, as opposed to formal language.", e:"The instructions were rewritten in plain vernacular so anyone could follow them."},
  {w:"wistful", ipa:"/ˈwɪst.fəl/", pos:"adjective", m:"Having or showing a feeling of vague or regretful longing.", e:"She gave a wistful smile, remembering her first apartment."}
];

const KEY = 'field-journal-collected';
let collected = [];

function todayStr(){
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}
function prettyDate(str){
  const [y,m,d] = str.split('-').map(Number);
  return new Date(y, m-1, d).toLocaleDateString(undefined, {month:'short', day:'numeric'});
}
function pad(n){ return String(n).padStart(3,'0'); }

async function loadCollected(){
  try{
    const raw = localStorage.getItem(KEY);
    collected = raw ? JSON.parse(raw) : [];
  }catch(e){
    collected = [];
  }
}
async function saveCollected(){
  try{
    localStorage.setItem(KEY, JSON.stringify(collected));
  }catch(e){
    console.error('Could not save progress', e);
  }
}

function computeStreak(){
  if(collected.length === 0) return 0;
  const dates = new Set(collected.map(c => c.date));
  let streak = 0;
  let cursor = new Date();
  // if today not collected yet, start checking from yesterday
  if(!dates.has(todayStr())){
    cursor.setDate(cursor.getDate() - 1);
  }
  while(true){
    const s = cursor.getFullYear() + '-' + String(cursor.getMonth()+1).padStart(2,'0') + '-' + String(cursor.getDate()).padStart(2,'0');
    if(dates.has(s)){
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else break;
  }
  return streak;
}

// Classes toggled on the "stamp" element to show/hide it.
// (Replaces the old .stamp / .stamp.show pair from the plain-CSS version.)
const STAMP_HIDDEN = ['opacity-0', 'scale-[0.4]'];
const STAMP_SHOWN  = ['opacity-[0.85]', 'scale-100'];

function setStampShown(shown){
  const stamp = document.getElementById('stamp');
  if(shown){
    stamp.classList.remove(...STAMP_HIDDEN);
    stamp.classList.add(...STAMP_SHOWN);
  } else {
    stamp.classList.remove(...STAMP_SHOWN);
    stamp.classList.add(...STAMP_HIDDEN);
  }
}

function render(){
  const today = todayStr();
  const already = collected.find(c => c.date === today);
  const nextIndex = collected.length % WORDS.length;
  const entry = already ? WORDS[already.wordIndex] : WORDS[nextIndex];

  document.getElementById('specimenNum').textContent = 'No. ' + pad(collected.length + (already ? 0 : 1));
  document.getElementById('word').textContent = entry.w;
  document.getElementById('ipa').textContent = entry.ipa;
  document.getElementById('pos').textContent = entry.pos;
  document.getElementById('meaning').textContent = entry.m;
  document.getElementById('example').textContent = '"' + entry.e + '"';

  const btn = document.getElementById('collectBtn');
  const note = document.getElementById('note');

  if(already){
    setStampShown(true);
    document.getElementById('stampDate').textContent = prettyDate(already.date);
    btn.textContent = 'Specimen collected';
    btn.disabled = true;
    note.textContent = "Come back tomorrow for the next one.";
  } else {
    setStampShown(false);
    btn.textContent = 'Collect specimen';
    btn.disabled = false;
    note.textContent = collected.length === 0
      ? "This starts your collection."
      : "Adds today's word to your collection.";
  }

  document.getElementById('statTotal').textContent = collected.length;
  document.getElementById('statStreak').textContent = computeStreak();

  renderCollection();
}

function renderCollection(){
  const list = document.getElementById('collection');
  const empty = document.getElementById('collectionEmpty');
  const rows = collected.slice().reverse().map((c, i) => {
    const w = WORDS[c.wordIndex];
    const num = collected.length - i;
    return `<div class="specimen-row group flex justify-between items-center gap-2.5 py-2.5 px-1 border-b border-paper/[0.07] cursor-pointer" data-index="${c.wordIndex}" data-num="${pad(num)}">
      <span class="font-mono text-[11px] text-paper/40 w-8 flex-shrink-0">${pad(num)}</span>
      <span class="font-serif text-[15.5px] text-paper flex-1 group-hover:text-brass">${w.w}</span>
      <span class="font-mono text-[10.5px] text-paper/40">${prettyDate(c.date)}</span>
    </div>`;
  }).join('');

  list.querySelectorAll('.specimen-row').forEach(el => el.remove());
  if(collected.length === 0){
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    list.insertAdjacentHTML('beforeend', rows);
    list.querySelectorAll('.specimen-row').forEach(row => {
      row.addEventListener('click', () => openModal(parseInt(row.dataset.index), row.dataset.num));
    });
  }
}

function openModal(wordIndex, num){
  const w = WORDS[wordIndex];
  document.getElementById('modalNum').textContent = 'No. ' + num;
  document.getElementById('modalWord').textContent = w.w;
  document.getElementById('modalIpa').textContent = w.ipa;
  document.getElementById('modalPos').textContent = w.pos;
  document.getElementById('modalMeaning').textContent = w.m;
  document.getElementById('modalExample').textContent = '"' + w.e + '"';
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.remove('hidden');
  backdrop.classList.add('flex');
}

function closeModal(){
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.add('hidden');
  backdrop.classList.remove('flex');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', (e) => {
  if(e.target.id === 'modalBackdrop') closeModal();
});

document.getElementById('collectBtn').addEventListener('click', async () => {
  const today = todayStr();
  if(collected.find(c => c.date === today)) return;
  const wordIndex = collected.length % WORDS.length;
  collected.push({date: today, wordIndex});
  await saveCollected();
  render();
  requestAnimationFrame(() => {
    setStampShown(true);
  });
});

document.getElementById('collectionToggle').addEventListener('click', () => {
  document.getElementById('collection').classList.toggle('hidden');
  document.getElementById('chev').classList.toggle('rotate-180');
});

document.getElementById('resetLink').addEventListener('click', async () => {
  if(!confirm('Clear your entire collection? This cannot be undone.')) return;
  collected = [];
  await saveCollected();
  render();
});

(async function init(){
  await loadCollected();
  render();
})();
