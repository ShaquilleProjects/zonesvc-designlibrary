<template>
  <div>
    <h2>Button Examples</h2>
    <div class="button-group">
      <button class="primary">Primary Button</button>
      <button class="secondary">Secondary Button</button>
      <button class="loading">Loading...</button>
      <button class="disabled" disabled>Disabled</button>
    </div>
  </div>
</template>

<style>
.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.primary {
  background-color: #0070f3;
  color: white;
}

.secondary {
  background-color: #e1e8ed;
  color: #1a202c;
}

.loading {
  background-color: #0070f3;
  color: white;
  position: relative;
}

.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.disabled {
  background-color: #cbd5e0;
  color: #718096;
  cursor: not-allowed;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
