Hooks.once('init', async function() {
  class ChatLogPF2EAdvantage extends CONFIG.ui.chat {
    _getEntryContextOptions() {
      const options = super._getEntryContextOptions();

      for (const option of options) {
        if (option.name == "PF2E.RerollMenu.HeroPoint") {
          option.callback = (li) => {
            const message = game.messages.get(li.dataset.messageId, { strict: true });
            game.pf2e.Check.rerollFromMessage(message, { keep: "higher" , resource: "hero-points" });
          }
        }
        
        if (option.name == "PF2E.RerollMenu.MythicPoint") {
          option.callback = (li) => {
            const message = game.messages.get(li.dataset.messageId, { strict: true });
            game.pf2e.Check.rerollFromMessage(message, { keep: "higher" , resource: "mythic-points" });
          }
        }
      }

      return options;
    }
  }

  CONFIG.ui.chat = ChatLogPF2EAdvantage;
});
