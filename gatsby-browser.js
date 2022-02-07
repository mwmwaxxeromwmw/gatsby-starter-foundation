export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version of Moks Auto?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
