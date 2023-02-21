# Debian Remap Keys with KXB

This is for remapping keys in X11 without using xmodmap which is deprecated.

Also xmodmap conflicts with xkb and causes changes to be reverted back to the base xkb config. So don't use xmodmap whenever possible.

Changes I made:

0. remove all calls to ~/.Xmodmap
1. created /usr/share/X11/xkb/symbols/hpdevone that inherits from the "us" layout for all the other keys.

```
default  partial alphanumeric_keys
xkb_symbols "basic" {

    // Makes Caps Lock become the "Hyper" key, and be the Mod3 modifier.
    // This allows me to easily use Mod3 in the i3 window manager without
    // messing with `setxkbmap`/`xmodmap`; it even keeps working when
    // re-plugging the keyboard.

    name[Group1]="English (US) hpdevone";
    include "us"

    key <CAPS>  { [ Hyper_L ] };

    modifier_map Mod3 { <CAPS> };
    modifier_map Mod3 { <HYPR> };

    include "level3(ralt_switch_multikey)"
};
```

3. Added a new layout in /usr/share/X11/xkb/rules/evdev.xml

```
    <layout>
      <configItem>
        <name>hpdevone</name>
        <shortDescription>en</shortDescription>
        <description>English (US) hpdevone</description>
        <languageList>
          <iso639Id>eng</iso639Id>
        </languageList>
      </configItem>
      <variantList>
      </variantList>
    </layout>
```

5. updated /etc/default/keyboard changing XKBLAYOUT to my new layout and setting XKBOPTIONS to an empty string

```
# KEYBOARD CONFIGURATION FILE

# Consult the keyboard(5) manual page.

XKBMODEL="pc105"
XKBLAYOUT="hpdevone"
XKBVARIANT=""
XKBOPTIONS=""

BACKSPACE="guess"
```

Finally note that you can test your keyboard config (it shows the order that the layout is instantiated with) with the following command:

```
setxkbmap -print -verbose 10
```

![Tux, the Linux mascot](/assets/images/tux.png)
