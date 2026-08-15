#!/usr/bin/env bash
set -euo pipefail

echo "==> Kör bun audit"
if bun audit; then
  echo "==> Inga sårbarheter hittades"
  exit 0
fi

echo "==> Sårbarheter hittade, försöker fixa med bun update"
bun update

echo "==> Kör bun audit igen efter update"
if bun audit; then
  echo "==> Sårbarheter lösta av bun update"
  exit 0
fi

echo "==> Sårbarheter kvarstår efter bun update, manuell åtgärd krävs"
exit 1
