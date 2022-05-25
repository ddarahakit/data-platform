const commonOptions = {
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
}

const productCarousel = tns({
  ...commonOptions,
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
})

const userGalleryMobile = tns({
  ...commonOptions,
  container: '.user-gallery.is-mobile .slider-list',
  controls: false,
  controlsContainer: '.user-gallery.is-mobile .user-gallery-controls',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  gutter: 4,
  edgePadding: 16,
  loop: false,
})

const userGalleryDesktop = tns({
  ...commonOptions,
  container: '.user-gallery.is-desktop .slider-list',
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  controls: true,
  gutter: 6,
  edgePadding: 75,
  loop: false,
})
