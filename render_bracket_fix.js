      function renderBracket() {
        const roundsCount = tournament.rounds.length;
        if (roundsCount === 0) return;

        let html = '<div class="bracket-wrapper">';

        // Left side rounds
        for (let r = 0; r < roundsCount - 1; r++) {
            html += `<div class="round-column">`;
            html += `<div class="round-header">${getRoundName(r, roundsCount)}</div>`;
            html += `<div class="matches-column">`;
            const totalMatches = tournament.rounds[r].length;
            const half = totalMatches / 2;
            for (let m = 0; m < half; m++) {
                html += renderMatchNode(r, m);
            }
            html += `</div></div>`;
        }

        // Final
        const finalRoundIdx = roundsCount - 1;
        const finalMatch = tournament.rounds[finalRoundIdx][0];
        html += `
            <div class="round-column center-round" style="width: 220px;">
                <div class="round-header">${getRoundName(finalRoundIdx, roundsCount)}</div>
                <div class="matches-column" style="justify-content: center;">
                    ${renderFinalNode(finalMatch, finalRoundIdx)}
                </div>
            </div>
        `;

        // Right side rounds (reverse order for mirroring)
        for (let r = roundsCount - 2; r >= 0; r--) {
            html += `<div class="round-column">`;
            html += `<div class="round-header right">${getRoundName(r, roundsCount)}</div>`;
            html += `<div class="matches-column">`;
            const totalMatches = tournament.rounds[r].length;
            const half = totalMatches / 2;
            for (let m = half; m < totalMatches; m++) {
                html += renderMatchNode(r, m);
            }
            html += `</div></div>`;
        }

        html += '</div>';

        const container = document.getElementById("bracket-render");
        container.innerHTML = html;
        fitTree();
      }
