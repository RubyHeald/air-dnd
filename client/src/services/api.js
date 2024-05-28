const api = {
  url: 'http://localhost:5001',

  async get(endpoint) {
    const res = await fetch(`${this.url}/${endpoint}`)
    return await res.json()
  },

  async put(endpoint, data) {
    const res = await fetch(`${this.url}/${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  }
}

export default api
