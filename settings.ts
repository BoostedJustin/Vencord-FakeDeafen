import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export default definePluginSettings({
    fakeMute: {
        type: OptionType.BOOLEAN,
        default: true,
        description: "appears as muted to others when fake deafen is enabled",
    },
    fakeDeafen: {
        type: OptionType.BOOLEAN,
        default: true,
        description: "appears as deafened to others when fake deafen is enabled",
    }
});
