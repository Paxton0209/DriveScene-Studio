"""Regenerate the lossless Latin delivery subset with fonttools[woff].

The complete original font remains the fallback for other scripts. No outline,
hinting, variation axis, feature or advance-width changes are requested.
"""
from pathlib import Path
from fontTools import subset

root = Path(__file__).resolve().parent / 'guizang-trial'
ranges = '0000-00FF,0131,0152-0153,02BB-02BC,02C6,02DA,02DC,0304,0308,0329,2000-206F,2074,20AC,2122,2190-2193,2212,2215,FEFF,FFFD'
options = subset.Options()
options.flavor = 'woff2'
options.layout_features = ['*']
options.name_IDs = ['*']
options.name_languages = ['*']
options.notdef_glyph = options.notdef_outline = options.recommended_glyphs = True
font = subset.load_font(str(root / 'InterVariable.woff2'), options)
subsetter = subset.Subsetter(options=options)
subsetter.populate(unicodes=subset.parse_unicodes(ranges))
subsetter.subset(font)
subset.save_font(font, str(root / 'InterLatin.woff2'), options)
