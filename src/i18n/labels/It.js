export const common = {
    all: 'Tutti',
}

export const config = {
    refresh: 'Refresh pagina Home',
    villain: 'Menù battaglia Troll',
    villain_tiers: 'Mostra battaglie con ragazze', // 'Mostra battaglie con ragazzi',
    market: 'Informazioni negozio',
    marketGirlsFilter: 'Filtro per ragazze nel mercato', // 'Filtro per ragazzi nel mercato',
    marketEquipsFilter: false, // 'Filtro per ogetti nel mercato',
    marketXPAff: 'XP e affetto nel mercato',
    marketHideSellButton: false, // 'Nascondi il bottone di vendita nel mercato',
    harem: 'Informazioni Harem',
    league: 'Informazioni sulle Leghe',
    league_board: 'Mostra i top della lega',
    league_promo: 'Mostra informazioni sulla promozione',
    simFight: 'Simulazione Leghe / Stagione / Troll',
    simFight_logging: 'Accesso dettagliato nella console del browser',
    simFight_highPrecisionMode: false, // 'Modalità ad alta precisione (attenzione: lento!)',
    teamsFilter: 'Filtro delle squadre',
    champions: 'Informazioni sui Campioni',
    homeScreen: false, // 'Scorciatoie e timer della schermata principale', 
    resourceBars: false, // 'Barre di risorse / Monitoraggio dei booster',
    popSort: false, // 'LdP ordinamento e navigazione rapida',
    seasonStats: false, // 'Statistiche di stagione',
    pachinkoNames: 'Mostra i nomi nel Pachinko',
    contestSummary: 'Riepilogo dei premi salvati dei contest',
    battleEndstate: 'Mostra i valori finali dopo aver saltato la battaglia',
}
export const stConfig = {
    missionsBackground: 'Cambiare lo sfondo delle missioni',
    collectMoneyAnimation: 'Disattivare l\'animazione di raccolta dei soldi',
    mobileBattle: false, // 'Correggi schermata di battaglia mobile',
    darkMobileLeague: false, // 'Sfondo scuro nella lega mobile',
    hideRotateDevice: false, // 'Nascondi il ricordo della rotazione del device su mobile',
    salaryTimers: false, // 'Leggibile timer di salario',
}

export const villain = {
    darklord: 'Signore Oscuro',
    ninjaspy: 'Spia Ninja',
    jacksoncrew: 'Ciurma di Jackson',
    pandorawitch: 'Strega Pandora',
    werebunnypolice: 'Polizia del Conigli Mannari',
    fallback: 'Mundo {{world}} villano'
}

export const market = {
    pointsUnbought: 'Punti statistica necessari per il massimo',
    moneyUnspent: 'Soldi necessari per il massimo',
    moneySpent: 'Soldi spesi al negozio',
    pointsLevel: 'Punti acquisiti da aumento livello',
    pointsBought: 'Punti comprati al negozio',
    pointsEquip: 'Punti statistica da equipaggiamento',
    pointsBooster: 'Punti statistica dei potenziamenti',
    pointsClub: 'Punti statistica bonus del Club',
    boosterItem: 'potenziamenti',
    xpItem: 'libri',
    xpCurrency: 'XP',
    affItem: 'regali',
    affCurrency: 'affetto',
    equips: 'equipaggiamento',
    youOwn: 'Possiedi <b>{{count}}</b> {{type}}.',
    youCanSell: 'Puoi vendere tutto per <b>{{cost}}</b> <span class="hudSC_mix_icn"></span>.',
    youCanGive: 'Puoi dare un massimo di <b>{{value}}</b> {{currency}}.'
}

export const marketGirlsFilter = {
    searchedName: 'Nome',
    girlName: 'Nome della ragazza', // 'Nome del ragazzo',
    searchedClass: 'Classe',
    searchedElement: 'Elemento',
    searchedRarity: 'Rarità',
    levelRange: 'Gamma di livelli',
    searchedAffCategory: 'Categoria di affetto',
    searchedAffLevel: 'Livello di affetto',
    grade0: '0 stella',
    grade1: '1 stella',
    grade2: '2 stelle',
    grade3: '3 stelle',
    grade4: '4 stelle',
    grade5: '5 stelle',
    grade6: '6 stelle',
    team: 'Squadra',
    visitTeams: 'Visita le <a href="../teams.html">Squadre</a> prima.'
}

export const marketXPAff = {
    aff: false, // 'Prossimo: {{remainNext}}'
}

export const marketHideSellButton = {
    hide: false, // Nascondi il bottone "Vendi"
}

export const harem = {
    marketRestocked: false, // '> Il <a href="../shop.html">mercato</a> si è rifornito dalla tua ultima visita.',
    visitMarket: false, // '> Visita prima il <a href="../shop.html">Mercato</a> per vedere un riassunto dell'inventario qui',
    haremStats: false, // 'Statistiche dell'harem',
    upgrades: false, // 'Aggiornamenti',
    levelsAwakening: false, // 'Livelli e risveglio',
    market: false, // 'Inventario e mercato',
    wikiPage: false, // La pagina wiki di {{name}}},
    haremLevel: 'Il livello del Harem',
    unlockedScenes: false, // 'Scene sbloccate',
    income: 'Guadagno',
    or: '{{left}} o {{right}}',
    toUpgrade: false, // 'Per aggiornare tutti:',
    toLevelCap: false, // 'Per salire di livello fino:',
    toLevelMax: false, // 'Per salire di livello al massimo ({{max}}):',
    affectionScenes: false, // 'Scene d'affetto',
    buyable: false, // 'Dispondibili nel mercato:',
    sellable: false, // 'Nell'inventario:',
    gifts: 'Regali',
    books: 'Libri',
    canBeSold: false, // 'Può essere venduto per {{sc}}',
    canBeBought: '{{item}} per {{amount}}',
    marketRestock: false, // Il mercato si rifornisce in {{time}} o al livello {{level}}",
}

export const league = {
    stayInTop: 'Per <em><u>rimanere tra i primi {{top}}</u></em>, devi avere un minimo di <em>{{points}}</em> punti',
    notInTop: 'Per <em><u>essere tra i primi {{top}}</u></em>, devi avere un minimo di <em>{{points}}</em> punti',
    challengesRegen: 'Rigenerazione naturale: <em>{{challenges}}</em>',
    challengesLeft: 'Combattimenti mancanti: <em>{{challenges}}</em>',
    averageScore: 'Punteggio medio per combattimento: <em>{{average}}</em>',
    scoreExpected: 'Punteggio previsto: <em>{{score}}</em>',
    toDemote: 'Per <em><u>retrocedere</u></em>, devi essere sorpassato da <em>{{players}}</em> giocatori',
    willDemote: 'Per <em><u>retrocedere</u></em>, puoi avere al massimo <em>{{points}}</em> punti',
    willDemoteZero: 'Per <em><u>retrocedere</u></em>, devi rimanere a <em>0</em> punti',
    toNotDemote: 'Per <em><u>non retrocedere</u></em>, devi avere più di <em>0</em> punti',
    toStay: 'Per <em><u>non essere promosso</u></em>, devi essere sorpassato da <em>{{players}}</em> giocatori',
    willStay: 'Per <em><u>non essere promosso</u></em>, puoi avere al massimo <em>{{points}}</em> punti',
    hideFoughtOpponents: false, // 'Nascondi avversari combattuti',
    showFoughtOpponents: false, // 'Mostra avversari combattuti',
    currentLeague: 'Lega attuale',
    victories: 'Vittorie',
    defeats: 'Sconfitte',
    unknown: 'Sconosciuto',
    notPlayed: 'Non giocato',
    levelRange: 'Gamma di livelli',
    leagueFinished: 'Lega finita il {{date}}',
    opponents: 'Avversari',
    leaguePoints: 'Punti',
    avg: 'Media',
}

export const teamsFilter = {
    searchedName: 'Nome',
    girlName: 'Nome della ragazza', // 'Nome del ragazzo',
    searchedClass: 'Classe',
    searchedElement: 'Elemento',
    searchedRarity: 'Rarità',
    levelRange: 'Gamma di livelli',
    searchedAffCategory: 'Categoria di affetto',
    searchedAffLevel: 'Livello di affetto',
    grade0: '0 stella',
    grade1: '1 stella',
    grade2: '2 stelle',
    grade3: '3 stelle',
    grade4: '4 stelle',
    grade5: '5 stelle',
    grade6: '6 stelle',
    searchedBlessedAttributes: 'Benedizioni',
    blessedAttributes: 'Ragazze benedette', // 'Ragazzi benedetti',
    nonBlessedAttributes: 'Ragazze non benedette', // 'Ragazzi non benedetti',
}

export const champions = {
    participants: false, // 'Partecipanti: {{participants}}/{{members}}',
    clubChampDuration: false, // '{{duration}} dall'inizio del giro',
}

export const resourceBars = {
    popsIn: false, // 'LdP in {{time}}',
    popsReady: false, // 'LdP pronti',
    readyAt: false, // 'Pronto in {{time}}',
    endAt: false, // 'Termina in {{time}}',
    fullAt: false, // 'Pieno in {{time}}',
    xp: false, // 'Prossimo: {{xp}} XP',
}

export const homeScreen = {
    clubChamp: 'Il Campione per Club',
    completeIn: false, // 'Completa in',
    newMissionsIn: false, // 'Nuova Missione in',
    missionsReady: false, // 'Missioni pronte',
}

export const seasonStats = {
    fights: 'Combattimenti',
    victories: 'Vittorie',
    defeats: 'Sconfitte',
    mojoWon: 'Mojo vinto',
    mojoLost: 'Mojo perso',
    mojoWonAvg: 'Media mojo vinto',
    mojoLostAvg: 'Media mojo perso',
    mojoAvg: 'Media mojo globale',
}

export const pachinkoNames = {
    availableGirls: 'Ragazze disponibili: ' // 'Ragazzi disponibili',
}

export const contestSummary = {
    totalRewards: 'Ricompense totali salvate ({{contests}} contest):',
    contestsWarning: 'I contest scadono dopo 21 giorni!'
}
