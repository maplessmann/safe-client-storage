# 🛡 safe-client-storage

A safe implementation of the `window.localStorage`.

## Installation

```bash
npm install safe-client-storage
```

## Usage

```javascript
import safeStorage from 'safe-client-storage'

safeStorage.setItem('theme', 'dark')

safeStorage.getItem('theme') // 'dark'
```
