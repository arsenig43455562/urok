/* Пиксельные персонажи Claude Maxing. Рисуются SVG-прямоугольниками, без фона.
   Использование: <svg class="sprite" data-sprite="laptop"></svg> → paintSprites(root) */
(function () {
  const O = '#F07F57', D = '#D2603E', K = '#151515';
  function base(o = {}) {
    const r = []; const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
    R(2, 4, 12, 8, O); R(2, 4, 1, 8, D); R(2, 11, 12, 1, D);
    if (o.squint) { R(5, 6, 1, 2, K); R(10, 7, 2, 1, K); } else { R(5, 6, 1, 2, K); R(10, 6, 1, 2, K); }
    if (o.brows) { R(4, 5, 2, 1, K); R(10, 5, 2, 1, K); }
    R(0, 7, 2, 2, O); R(0, 8, 2, 1, D);
    if (!o.noRight) { R(14, 7, 2, 2, O); R(14, 8, 2, 1, D); }
    if (!o.noLegs) { R(3, 12, 1, 2, O); R(5, 12, 1, 2, O); R(10, 12, 1, 2, O); R(12, 12, 1, 2, O); }
    return r;
  }
  function mini(r, x, y) { // маленький Клод за ноутбуком
    const R = (a, b, w, h, c) => r.push([a, b, w, h, c]);
    R(x, y, 6, 4, O); R(x, y, 1, 4, D); R(x + 1, y + 1, 1, 1, K); R(x + 4, y + 1, 1, 1, K);
    R(x - 1, y + 2, 1, 1, O); R(x + 6, y + 2, 1, 1, O); R(x + 1, y + 3, 4, 2, '#1c1c1c'); R(x + 2, y + 4, 1, 1, '#eee');
    R(x + 1, y + 5, 1, 1, O); R(x + 4, y + 5, 1, 1, O);
  }
  const S = {
    base: () => ({ w: 16, h: 14, r: base() }),
    laptop: () => { const r = base({ noLegs: true }); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(1, 9, 10, 5, '#1c1c1c'); R(1, 9, 10, 1, '#333'); R(11, 12, 3, 2, '#2a2a2a'); R(4, 11, 1, 1, '#eee'); R(6, 11, 1, 1, '#eee'); R(5, 12, 1, 1, '#eee'); R(7, 12, 1, 1, '#eee');
      return { w: 16, h: 14, r }; },
    chef: () => { const r = base(); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(4, 0, 3, 1, '#FBF8F3'); R(8, 0, 3, 1, '#FBF8F3'); R(3, 1, 10, 2, '#FBF8F3'); R(4, 3, 8, 1, '#E3DAD0');
      R(16, 7, 2, 1, '#2a2a2a'); R(18, 6, 5, 1, '#3a3a3a'); R(18, 7, 4, 1, '#1f1f1f');
      R(19, 3, 1, 1, '#F4C542'); R(21, 2, 1, 1, '#F4C542'); R(22, 4, 1, 1, '#F4C542'); R(20, 4, 1, 1, '#F4C542');
      return { w: 23, h: 14, r }; },
    detective: () => { const r = base({ squint: true, noRight: true }); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(5, 0, 1, 1, '#2a2420'); R(10, 0, 1, 1, '#2a2420'); R(4, 1, 8, 1, '#6b5a50'); R(3, 2, 10, 1, '#7a675b'); R(1, 3, 14, 1, '#4a3e37');
      R(14, 8, 2, 2, O); R(14, 9, 2, 1, D);
      R(17, 2, 3, 1, '#333'); R(16, 3, 1, 3, '#333'); R(20, 3, 1, 3, '#333'); R(17, 6, 3, 1, '#333'); R(17, 3, 3, 3, '#dfe6ea'); R(17, 3, 1, 1, '#fff'); R(18, 4, 1, 1, '#fff'); R(16, 6, 1, 1, '#333'); R(15, 7, 1, 1, '#333');
      return { w: 21, h: 14, r }; },
    rocket: () => { const r = base({ brows: true }); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(0, 4, 2, 3, O); R(15, 9, 3, 2, '#222'); R(16, 8, 1, 1, '#E53935');
      R(21, 0, 2, 1, '#2F4F8F'); R(20, 1, 4, 1, '#2F4F8F'); R(20, 2, 4, 6, '#F2F2F2'); R(20, 2, 1, 6, '#cfcfcf'); R(21, 3, 2, 2, '#9CC3E6');
      R(19, 6, 1, 3, '#2F4F8F'); R(24, 6, 1, 3, '#2F4F8F'); R(21, 8, 2, 1, '#222'); R(21, 9, 2, 2, '#F4C542'); R(21, 11, 2, 1, '#F08A3C');
      R(19, 11, 1, 1, '#F4C542'); R(24, 10, 1, 1, '#F4C542'); R(20, 13, 1, 1, '#F4C542'); R(23, 12, 1, 1, '#F4C542');
      return { w: 25, h: 14, r }; },
    clipboard: () => { const r = base({ noRight: true }); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(14, 7, 1, 2, O); R(15, 4, 6, 8, '#8B5E3C'); R(16, 5, 4, 6, '#F2F2F2'); R(17, 4, 2, 1, '#BDBDBD');
      R(16, 6, 1, 1, '#3F7A3A'); R(17, 6, 3, 1, '#9a9a9a'); R(16, 8, 1, 1, '#3F7A3A'); R(17, 8, 3, 1, '#9a9a9a'); R(17, 10, 2, 1, '#9a9a9a');
      R(23, 10, 1, 3, '#B8FF6A'); R(25, 8, 1, 5, '#B8FF6A'); R(27, 5, 1, 8, '#B8FF6A'); R(22, 13, 7, 1, '#666');
      R(27, 2, 1, 1, '#B8FF6A'); R(26, 3, 3, 1, '#B8FF6A');
      return { w: 29, h: 14, r }; },
    foreman: () => { const r = base({ brows: true }); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(4, 1, 8, 3, '#F4C542'); R(3, 3, 10, 1, '#D99A1E'); R(7, 1, 2, 1, '#FFE08A');
      mini(r, 19, 7); mini(r, 27, 7); mini(r, 35, 7);
      return { w: 42, h: 14, r }; },
    books: () => { const r = base(); const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      R(16, 11, 9, 2, '#3FA7B5'); R(16, 11, 9, 1, '#5CC3D0'); R(17, 9, 8, 2, '#B8FF6A'); R(17, 9, 8, 1, '#D4FF9E'); R(16, 7, 8, 2, '#F4C542'); R(16, 7, 8, 1, '#FFE08A');
      R(24, 11, 1, 2, '#F2F2F2'); R(24, 9, 1, 2, '#F2F2F2'); R(23, 7, 1, 2, '#F2F2F2'); R(16, 13, 9, 1, '#555');
      return { w: 25, h: 14, r }; },
    me: () => { const r = []; const R = (x, y, w, h, c) => r.push([x, y, w, h, c]);
      const HA = '#5A3A24', HD = '#3B2515', HL = '#7C5435', SK = '#F1C7A8', SS = '#D9A584', SW = '#5F5A5D', SWD = '#47434A', SWL = '#7A7479', JN = '#262830', JD = '#1A1B21';
      R(7, 0, 2, 1, HA); R(10, 0, 3, 1, HA); R(5, 1, 10, 1, HA); R(4, 2, 12, 1, HA); R(4, 3, 12, 1, HA); R(3, 4, 14, 1, HA); R(3, 5, 14, 1, HA);
      R(3, 6, 3, 1, HA); R(14, 6, 3, 1, HA); R(3, 7, 3, 1, HA); R(14, 7, 3, 1, HA); R(4, 8, 2, 1, HD); R(14, 8, 2, 1, HD);
      for (const [x, y] of [[5, 2], [8, 1], [11, 3], [13, 2], [6, 4], [9, 4], [12, 5], [15, 4], [4, 5], [10, 2], [7, 3], [14, 3], [16, 5], [3, 6], [16, 7]]) R(x, y, 1, 1, HD);
      for (const [x, y] of [[7, 2], [10, 1], [12, 3], [5, 4], [9, 3], [13, 4], [6, 1], [15, 6]]) R(x, y, 1, 1, HL);
      R(6, 6, 8, 6, SK); R(7, 12, 6, 1, SK); R(13, 7, 1, 5, SS); R(12, 12, 1, 1, SS); R(5, 9, 1, 2, SK); R(14, 9, 1, 2, SS);
      R(6, 6, 2, 1, HA); R(9, 6, 3, 1, HA); R(13, 6, 1, 1, HA); R(6, 7, 1, 1, HD); R(10, 7, 1, 1, HD);
      R(8, 8, 1, 1, HD); R(11, 8, 1, 1, HD); R(8, 9, 1, 1, K); R(11, 9, 1, 1, K); R(9, 11, 2, 1, '#B9776A'); R(9, 13, 2, 1, SS);
      R(4, 14, 12, 9, SW); R(7, 13, 2, 2, SWL); R(11, 13, 2, 2, SWL); R(9, 14, 2, 1, SWD); R(10, 15, 1, 2, '#2b2b2b'); R(10, 15, 1, 1, '#BDBDBD');
      R(2, 15, 2, 6, SW); R(16, 15, 2, 6, SW); R(2, 15, 1, 6, SWD); R(17, 15, 1, 6, SWD); R(4, 22, 12, 1, SWD);
      for (let y = 15; y < 21; y += 2) { R(3, y, 1, 1, SWD); R(16, y, 1, 1, SWD); }
      for (const [x, y] of [[5, 15], [13, 16], [6, 21], [12, 21], [14, 14], [5, 18], [15, 20], [4, 16]]) R(x, y, 1, 1, SWL);
      R(4, 16, 12, 6, '#1c1c1c'); R(4, 16, 12, 1, '#333'); R(10, 17, 1, 3, O); R(9, 18, 3, 1, O);
      R(3, 18, 2, 2, SK); R(15, 18, 2, 2, SK); R(3, 19, 2, 1, SS);
      R(5, 23, 4, 5, JN); R(11, 23, 4, 5, JN); R(8, 23, 1, 5, JD); R(14, 23, 1, 5, JD); R(4, 28, 5, 1, '#111'); R(11, 28, 5, 1, '#111');
      return { w: 20, h: 29, r }; },
    bell: () => ({ w: 9, h: 10, r: [[4, 0, 1, 1, 'currentColor'], [2, 1, 5, 1, 'currentColor'], [1, 2, 7, 5, 'currentColor'], [0, 7, 9, 1, 'currentColor'], [3, 8, 3, 1, 'currentColor']] }),
    play: () => ({ w: 7, h: 8, r: [[0, 0, 2, 8, '#fff'], [2, 1, 2, 6, '#fff'], [4, 2, 2, 4, '#fff'], [6, 3, 1, 2, '#fff']] }),
    lock: () => ({ w: 7, h: 8, r: [[2, 0, 3, 1, 'currentColor'], [1, 1, 1, 3, 'currentColor'], [5, 1, 1, 3, 'currentColor'], [0, 3, 7, 5, 'currentColor']] }),
    star: () => ({ w: 7, h: 7, r: [[3, 0, 1, 2, 'currentColor'], [3, 5, 1, 2, 'currentColor'], [0, 3, 2, 1, 'currentColor'], [5, 3, 2, 1, 'currentColor'], [2, 2, 3, 3, 'currentColor']] })
  };
  window.paintSprites = function (root) {
    (root || document).querySelectorAll('svg[data-sprite]').forEach(s => {
      const f = S[s.dataset.sprite]; if (!f) return; const d = f();
      s.setAttribute('viewBox', `0 0 ${d.w} ${d.h}`); s.setAttribute('shape-rendering', 'crispEdges');
      s.innerHTML = d.r.map(([x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`).join('');
    });
  };
})();
