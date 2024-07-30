describe('Open App and Navigate to Home Screen', () => {
    it('should open the app and navigate to the home screen', async () => {
      await browser.pause(5000); // Tunggu beberapa detik jika diperlukan
      const homeScreenElement = await $('selector_of_home_screen_element'); // Ganti dengan selector elemen layar beranda
      await expect(homeScreenElement).toBeDisplayed();
    });
  });
  