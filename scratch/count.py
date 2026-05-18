import re
from collections import Counter

with open('../index.html', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'c:\s*["\']([^"\']+)["\']', text)
counts = Counter(matches)

for category, count in counts.items():
    print(f"{category}: {count}")
