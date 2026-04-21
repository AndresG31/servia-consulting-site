#!/usr/bin/env python3
"""
Intelligently wrap major content sections with ScrollFadeIn components
"""

import re
import os

SITE_DIR = "/Users/andresgutierrez/Desktop/servia-consulting-site/app"

def wrap_section_content(file_path):
    """Wrap main content divs with ScrollFadeIn"""
    try:
        with open(file_path, 'r') as f:
            content = f.read()

        original = content

        # Pattern to find sections that should be wrapped
        # Look for: <div className="max-w-... or <div className="grid... at section level
        # But NOT if already inside ScrollFadeIn

        # Simple approach: wrap content after section headers
        # Look for patterns like: Section Header followed by content grid/container

        # Pattern 1: Wrap package cards in service page
        if 'service/page.jsx' in file_path:
            # Wrap the three package cards
            content = re.sub(
                r'(<!-- Package 1 - Foundation -->)\s*(<div className="relative bg-gradient)',
                r'\1\n            <ScrollFadeIn>\n            \2',
                content
            )
            content = re.sub(
                r'(</Link>\s*</div>\s*</div>)\s*(<!-- Package 2)',
                r'\1\n            </ScrollFadeIn>\n\n            <ScrollFadeIn delay={100}>\n            \2',
                content
            )
            content = re.sub(
                r'(</Link>\s*</div>\s*</div>)\s*(<!-- Package 3)',
                r'\1\n            </ScrollFadeIn>\n\n            <ScrollFadeIn delay={200}>\n            \2',
                content
            )
            # Close last package
            content = re.sub(
                r'(</Link>\s*</div>\s*</div>)\s*(</div>\s*</div>\s*</section>)',
                r'\1\n            </ScrollFadeIn>\n\n          \2',
                content,
                count=1
            )

        # Only write if changes were made
        if content != original:
            with open(file_path, 'w') as f:
                f.write(content)
            print(f"✓ Wrapped sections in {os.path.basename(file_path)}")
            return True
        else:
            print(f"- No changes needed for {os.path.basename(file_path)}")
            return False

    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

# Process key pages
pages_to_process = [
    f"{SITE_DIR}/service/page.jsx",
]

print("Wrapping sections with ScrollFadeIn...")
for page in pages_to_process:
    if os.path.exists(page):
        wrap_section_content(page)
    else:
        print(f"- Page not found: {page}")

print("\nDone!")
