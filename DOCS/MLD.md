list(**id**, name, position, created_at, updated_at)
card(**id**, title, color, position, #list(id), created_at, updated_at)
tag(**id**, name, color, created_at, updated_at)
card_has_tag(#card(id), #tag(id), created_at)