<script lang="ts">
  import DiscordMark from "$lib/components/svg/discord-mark-white.svelte"
</script>

<style>
  #background {
   /* diameter of the circle */
   --d: 1.1px; 
   
   background : radial-gradient(
     circle at 
        var(--d) 
        var(--d), 
        
     #FFF2 calc(var(--d) - 2px), 
     #0000 var(--d)
   ) 
   0 0 / 10px 10px;
  }

  ::selection {
    background-color: rgba(255, 255, 255, .1);
  }
</style>
<div class="hero min-h-screen" id="background">
  <div class="hero min-h-screen min-w-full" style="background-image: url(https://assets-global.website-files.com/64760069e93084646c9ee405/64760069e93084646c9ee492_blur-background-webflow-1800-2-p-1080.webp);">
    <div class="fixed top-2 right-2 flex-row">
      <label class="swap swap-rotate">
    
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="light" />
        
        <!-- sun icon -->
        <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
        <!-- moon icon -->
        <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
      </label>
    </div>

    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-extrabold text-primary">
          <DiscordMark class="size-6 fill-primary fixed mt-5" />
          @spfj
        </h1>
        <p class="py-6">Hi! 👋 This domain is owned by me;<br/>Don't hesitate to contact.</p>
        <!--<button class="btn btn-sm btn-primary shadow-lg shadow-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Click
        </button>-->
      </div>
  </div>
  </div>
</div>