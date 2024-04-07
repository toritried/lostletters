/* Mastodon/Jekyll integration thanks to https://www.kianryan.co.uk/2022-11-09-from-twitter-to-mastodon-on-your-jekyll-home-page/ */
/* On page initialization, will look for a mastodon_timeline element
   If found, will load the rss feed from the instance, and display the first N
   items. */
/* Heavily inspired by:
   https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/ */

const MastodonBar = {

  config: {
    instanceName: 'cutie.city',
    userName: 'lostletters',
    profileImg: '',
    itemsToDisplay: 1,
  },

  displayItems: function (data, dom) {

    const items = Array.from(data.querySelectorAll("item")).slice(0, MastodonBar.config.itemsToDisplay);
    var html = '';

    items.forEach(item => {

      var mediaHtml = '';
      const media = item.querySelectorAll("content");
      media.forEach(me => {

        const type = me.attributes['type'].value;
        const url = me.attributes['url'].value;
        const alt = (me.querySelector('description') || {}).innerHTML;
        if (/image/.test(type)) mediaHtml += `
          <img class="masto-img" src="${url}" alt="${alt}" />
        `;
      });

      /* Create date/time string. */
      const date = new Date(item.querySelector("pubDate").innerHTML);
      const dateStr = date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });

      html += `
        <article class="masto-article noext">
          <div class="masto-layout">
            <div class="masto-content">
              <div>
              <h2>Latest Toot</h2>
                ${MastodonBar.decodeHTML(item.querySelector("description").innerHTML)}
                <i><a href="${item.querySelector("link").innerHTML}" target="_blank" rel="noopener">${dateStr}</a></i>
              </div>
              ${mediaHtml}
            </div>
          </div>
        </article>
      `;
    });

    dom.innerHTML = html;
  },

  decodeArea: document.createElement('textarea'),

  decodeHTML: function (html) {
    MastodonBar.decodeArea.innerHTML = html;
    return MastodonBar.decodeArea.value;
  },

  init: function () {
    const timeline = document.getElementById("mastodon_timeline");
    if (timeline != null) {
      console.log("Initialize mastodon");

      const rssUrl = `https://${MastodonBar.config.instanceName}/users/${MastodonBar.config.userName}.rss`;

      fetch(rssUrl).then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => MastodonBar.displayItems(data, timeline));
    }
  },
};

document.addEventListener('DOMContentLoaded', MastodonBar.init);