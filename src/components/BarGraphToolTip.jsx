const getOrCreateTooltip = (chart) => {
  // console.log(chart);
  let barEl = chart.canvas.parentNode.querySelector('div');
  // 툴팁 박스 엘레먼트 조절
  if (!barEl) {
    barEl = document.createElement('div');
    barEl.setAttribute('id', 'settedBar');
    barEl.style.background = 'rgba(0, 0, 0, 0.4)';
    // barEl.style.borderRadius = '3px';
    barEl.style.color = 'white';
    barEl.style.opacity = 1;
    barEl.style.pointerEvents = 'none';
    barEl.style.position = 'absolute';
    // barEl.style.transform = 'translate(0,-50%)';
    barEl.style.transition = 'all .2s ease';

    const table = document.createElement('table');
    table.style.margin = '0px';

    barEl.appendChild(table);
    chart.canvas.parentNode.appendChild(barEl);
  }

  return barEl;
};

const externalTooltipHandler = (context) => {
  const { chart, tooltip } = context;
  const barEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    barEl.style.opacity = 0;
    return;
  }

  // Set Text  -> 툴팁아래  t body 부분
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b) => b.lines);

    const tableHead = document.createElement('thead');

    titleLines.forEach((title) => {
      const tr = document.createElement('tr');
      tr.style.borderWidth = 0;

      const th = document.createElement('th');
      th.style.borderWidth = 0;
      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {
      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = 0;

      const td = document.createElement('td');
      td.style.borderWidth = 0;

      const text = document.createTextNode(body + 'km');
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = barEl.querySelector('table');

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  // 여기서 툴팁 위치 조정 가능한데 지금 안함

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  barEl.style.opacity = 1;
  barEl.style.left = positionX + tooltip.caretX + 'px';
  barEl.style.top = positionY + tooltip.caretY + 'px';

  // barEl.style.transform = 'translate(-50%)';
  // console.log(positionX, positionY, tooltip.caretX, tooltip.caretY);
  barEl.style.font = 'text-500';
  barEl.style.padding = '4px' + ' 4px';
};

export default externalTooltipHandler;
