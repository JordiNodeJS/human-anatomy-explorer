/**
 * Audio feedback system with physical-feeling sounds
 * Uses Web Audio API to generate sophisticated, subtle audio feedback
 */

class AudioFeedback {
  constructor() {
    this.audioContext = null;
    this.initialized = false;
    this.enabled = true;
    this.masterVolume = 0.15; // Subtle, not intrusive
  }

  /**
   * Initialize the audio context (must be called after user interaction)
   */
  init() {
    if (this.initialized) return;

    try {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      this.initialized = true;
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
      this.enabled = false;
    }
  }

  /**
   * Resume audio context if suspended (required by browsers)
   */
  async resume() {
    if (this.audioContext && this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }
  }

  /**
   * Play a hover sound - soft, warm tap
   */
  playHover() {
    if (!this.enabled || !this.initialized) return;
    this.resume();

    const now = this.audioContext.currentTime;

    // Create oscillator for warm tone
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    // Warm, muted frequency
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);

    // Low-pass filter for softness
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(2000, now);
    filter.Q.setValueAtTime(1, now);

    // Quick envelope - like a soft tap
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.3, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    // Connect and play
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  /**
   * Play a select/click sound - satisfying confirmation click
   */
  playSelect() {
    if (!this.enabled || !this.initialized) return;
    this.resume();

    const now = this.audioContext.currentTime;

    // Two-tone click for satisfying feedback
    // First: higher attack tone
    const osc1 = this.audioContext.createOscillator();
    const gain1 = this.audioContext.createGain();
    const filter1 = this.audioContext.createBiquadFilter();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(1200, now);
    osc1.frequency.exponentialRampToValueAtTime(600, now + 0.05);

    filter1.type = "lowpass";
    filter1.frequency.setValueAtTime(3000, now);

    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(this.masterVolume * 0.5, now + 0.005);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(this.audioContext.destination);

    osc1.start(now);
    osc1.stop(now + 0.12);

    // Second: lower resonance
    const osc2 = this.audioContext.createOscillator();
    const gain2 = this.audioContext.createGain();
    const filter2 = this.audioContext.createBiquadFilter();

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(300, now + 0.01);
    osc2.frequency.exponentialRampToValueAtTime(150, now + 0.15);

    filter2.type = "lowpass";
    filter2.frequency.setValueAtTime(1500, now);

    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(this.masterVolume * 0.4, now + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(this.audioContext.destination);

    osc2.start(now);
    osc2.stop(now + 0.2);
  }

  /**
   * Play a tab switch sound - lateral movement feel
   */
  playTabSwitch() {
    if (!this.enabled || !this.initialized) return;
    this.resume();

    const now = this.audioContext.currentTime;

    // Subtle swoosh with pitch shift
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.linearRampToValueAtTime(800, now + 0.06);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, now);
    filter.Q.setValueAtTime(2, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.25, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  /**
   * Play a view switch sound - deeper transition
   */
  playViewSwitch() {
    if (!this.enabled || !this.initialized) return;
    this.resume();

    const now = this.audioContext.currentTime;

    // Deeper, more substantial transition sound
    const osc1 = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(400, now);
    osc1.frequency.exponentialRampToValueAtTime(200, now + 0.2);

    osc2.type = "sine";
    osc2.frequency.setValueAtTime(600, now);
    osc2.frequency.exponentialRampToValueAtTime(400, now + 0.2);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(2000, now);
    filter.frequency.exponentialRampToValueAtTime(500, now + 0.2);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.4, now + 0.02);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.3, now + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    const merger = this.audioContext.createChannelMerger(2);
    osc1.connect(merger, 0, 0);
    osc2.connect(merger, 0, 1);
    merger.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.3);
    osc2.stop(now + 0.3);
  }

  /**
   * Play a button click - crisp UI feedback
   */
  playButtonClick() {
    if (!this.enabled || !this.initialized) return;
    this.resume();

    const now = this.audioContext.currentTime;

    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(1000, now);
    osc.frequency.exponentialRampToValueAtTime(500, now + 0.03);

    gainNode.gain.setValueAtTime(this.masterVolume * 0.15, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  /**
   * Toggle audio on/off
   */
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  /**
   * Set master volume (0-1)
   */
  setVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }
}

// Export singleton instance
export const audioFeedback = new AudioFeedback();
