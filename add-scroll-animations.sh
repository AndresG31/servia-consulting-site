#!/bin/bash

# Script to add ScrollFadeIn animations to all pages efficiently
# This adds the import and wraps major content sections

SITE_DIR="/Users/andresgutierrez/Desktop/servia-consulting-site/app"

# Function to add ScrollFadeIn import if not present
add_import() {
  local file="$1"
  if ! grep -q "ScrollFadeIn" "$file"; then
    # Add import after other imports
    if grep -q "'use client'" "$file"; then
      sed -i '' "/^import.*from.*$/a\\
import ScrollFadeIn from '../components/ui/ScrollFadeIn'\\
" "$file"
    else
      sed -i '' "1i\\
'use client'\\
\\
import ScrollFadeIn from '../components/ui/ScrollFadeIn'\\
" "$file"
    fi
    echo "Added ScrollFadeIn import to $file"
  fi
}

# Add to audit/results page
echo "Processing audit/results/page.jsx..."
if [ -f "$SITE_DIR/audit/results/page.jsx" ]; then
  add_import "$SITE_DIR/audit/results/page.jsx"
fi

# Add to team/[slug] page
echo "Processing team/[slug]/page.jsx..."
if [ -f "$SITE_DIR/team/[slug]/page.jsx" ]; then
  # Already has 'use client', just add import
  if ! grep -q "ScrollFadeIn" "$SITE_DIR/team/[slug]/page.jsx"; then
    sed -i '' "/import { teamMembers }/a\\
import ScrollFadeIn from '../../components/ui/ScrollFadeIn'" "$SITE_DIR/team/[slug]/page.jsx"
    echo "Added ScrollFadeIn import to team/[slug]/page.jsx"
  fi
fi

# Add to service/[slug] page
echo "Processing service/[slug]/page.jsx..."
if [ -f "$SITE_DIR/service/[slug]/page.jsx" ]; then
  if ! grep -q "ScrollFadeIn" "$SITE_DIR/service/[slug]/page.jsx"; then
    sed -i '' "/import { services }/a\\
import ScrollFadeIn from '../../components/ui/ScrollFadeIn'" "$SITE_DIR/service/[slug]/page.jsx"
    echo "Added ScrollFadeIn import to service/[slug]/page.jsx"
  fi
fi

# Add to service/quiz pages
for quiz_page in "$SITE_DIR/service/quiz/page.jsx" "$SITE_DIR/service/quiz/results/page.jsx"; do
  if [ -f "$quiz_page" ]; then
    echo "Processing $quiz_page..."
    add_import "$quiz_page"
  fi
done

# Add to blog pages
for blog_page in "$SITE_DIR/blog/page.jsx" "$SITE_DIR/blog/[slug]/page.jsx"; do
  if [ -f "$blog_page" ]; then
    echo "Processing $blog_page..."
    add_import "$blog_page"
  fi
done

# Add to policy pages
for policy_page in "$SITE_DIR/privacy/page.jsx" "$SITE_DIR/terms/page.jsx" "$SITE_DIR/cookies/page.jsx"; do
  if [ -f "$policy_page" ]; then
    echo "Processing $policy_page..."
    add_import "$policy_page"
  fi
done

echo "✓ ScrollFadeIn imports added to all pages"
echo "Note: You still need to wrap content sections manually with <ScrollFadeIn> components"
