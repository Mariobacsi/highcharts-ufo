<template>
  <div class="scroll-container">
    <section>
      <img src="../assets/ufo-header.svg">
    </section>
    <section>
      <div class="card" id="beschreibung">
        <h1 class="beschreibung-header">
          UFO
        </h1>
        Wenn die Rede von einem UFO ist, haben die meisten Menschen wahrscheinlich direkt ein Bild von Aliens im Kopf,
        die sich mit einer fliegenden Untertasse oder einer anderen Art des Raumschiffs Richtung Erde begeben. Aber,
        wenn man eng gefasst bei dem Begriff bleibt, ist ein UFO erst einmal nicht mehr als ein unbekanntes fliegendes
        Objekt.<br><br>
        Es geht um Phänomene, die von Beobachtern als fliegend wahrgenommen werden und nicht eindeutig identifiziert
        werden können. Umgangssprachlich wird der Begriff als Bezeichnung für Raumfahrzeuge hypothetischer
        außerirdischer Lebewesen verwendet. Ursprünglich bürgerte sich der Begriff „Fliegende Untertasse“ aufgrund
        erster Zeitungsberichte über UFOs ein. Bis heute prägt das Bild der Fliegenden Untertasse menschliche
        Vorstellungen davon, wie Raumfahrzeuge hypothetischer außerirdischer Lebewesen typischerweise aussehen könnten.
        Um den umgangssprachlich missverständlichen Begriff UFO zu vermeiden, wird von einigen Untersuchern statt UFO
        der Begriff „UAP“ für unidentified oder unexplained aerial phenomenon oder auch unidentified aerospace phenomena
        benutzt, zu Deutsch unidentifiziertes Luft-/Luftraum-Phänomen.<br><br>
        In der sogenannten Ufologie wird zwischen Beobachtungen von „UFOs im weiteren Sinne“, die nach genauerer
        Überprüfung als bekannte Objekte oder Phänomene identifiziert werden können, und Beobachtungen von „UFOs im
        engeren Sinne“, die auch nach genauerer Überprüfung nicht identifiziert werden können, unterschieden. „UFOs im
        weiteren Sinne“ machen den größten Teil der UFO-Sichtungen aus.<br><br>
        Ein wissenschaftlich anerkannter Nachweis dafür, dass solche „UFO-Beobachtungen“ auf die Existenz außerirdischer
        Besucher der Erde zurückzuführen wären, existiert nicht.<br><br>
        Die auf dieser Seite zu findenden Statistiken basieren auf den Daten von folgender Seite: <a
          href="https://raw.githubusercontent.com/planetsig/ufo-reports/master/csv-data/ufo-scrubbed-geocoded-time-standardized.csv">githubusercontent.com</a>
        <div class="quelle">
          Quellen: https://www.quarks.de/weltall/astronomie/das-wissen-wir-ueber-ufos/,
          https://de.wikipedia.org/wiki/UFO
        </div>

      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
.scroll-container {
  padding-top: 60px;
  height: 100vh;
}

section {
  height: 100vh;
}


/* Other styles */
section {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px;
}

.beschreibung-header {
  color: #2d2e83;
  text-align: center;
}

#beschreibung {
  color: #2d2e83;
  text-align: left;
  font-size: 18px;
  width: 60%;

}

.quelle {
  padding-top: 20px;
  font-size: 12px;
}


</style>
