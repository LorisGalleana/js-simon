---

# JS-SIMON

## Descrizione

Il progetto **JS-Simon** consiste in un gioco interattivo in cui l'utente deve memorizzare una serie di numeri casuali mostrati per 30 secondi. Successivamente, il programma chiederà all'utente di inserire i numeri che ha visto, uno alla volta. L'obiettivo del gioco è verificare quanti e quali numeri l'utente è riuscito a ricordare correttamente.

### Obiettivi del progetto

1. **Visualizzazione dei numeri casuali**:
   - All'avvio del gioco, il programma visualizzerà 5 numeri casuali.
   - I numeri saranno visibili per 30 secondi.
   
2. **Timer e nascita dei numeri**:
   - Dopo i 30 secondi, i numeri scompariranno dalla pagina.
   
3. **Indovinare i numeri**:
   - L'utente dovrà inserire i numeri che ha visto tramite prompt().
   - Una volta inseriti tutti i numeri, il programma confronterà i numeri indovinati con quelli originali e darà il risultato.

4. **Bonus: Interfaccia utente migliorata**:
   - Rimuovere l'uso di `prompt()` e gestire l'inserimento dei numeri direttamente dalla pagina.
   - Migliorare l'aspetto grafico della pagina per renderla più piacevole.

### Tecnologie Utilizzate

- **HTML5**: per la struttura della pagina.
- **CSS3**: per la stilizzazione della pagina e degli elementi del gioco.
- **JavaScript**: per la logica del gioco, inclusi il timer, la generazione dei numeri casuali, e la gestione delle interazioni dell'utente.

## Struttura del Progetto

- `index.html`: La pagina principale con il layout per visualizzare i numeri e l'input per l'inserimento dei numeri da parte dell'utente.
- `style.css`: Il file contenente gli stili per la pagina e gli elementi del gioco.
- `script.js`: Il file con la logica del gioco, gestione del timer, generazione dei numeri casuali e confronto dei numeri inseriti dall'utente.

---
