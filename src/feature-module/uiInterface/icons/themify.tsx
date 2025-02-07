import React, { useEffect } from 'react'
// import '../../../style/icon/themify/themify.css'


const ThemifyIcons = () => {
  useEffect(() => {
    const loadCSS = async () => {
      // Dynamically import the CSS file
      await import('../../../style/icon/themify/themify.css');
    };

    loadCSS();

    // Optionally, cleanup if you want to remove the CSS when the component unmounts
    return () => {
      // Find the link element with the href that includes the CSS file path and remove it
      const linkElement :any = document.querySelector('link[href*="themify.css"]');
      if (linkElement) {
        linkElement.parentNode.removeChild(linkElement);
      }
    };
  }, []);
  return (
    <div>
       <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Themify Icon</h3>
              </div>
            </div>
          </div>	
          {/* /Page Header */}					
          <div className="row">
            {/* Chart */}
            <div className="col-md-12">	
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Themify Icon</div>
                </div>
                <div className="card-body">
                  <div className="icons-items">
                    <ul className="icons-list">
                      <li><i className="ti-arrow-up" data-bs-toggle="tooltip" title="ti-arrow-up" /></li>
                      <li><i className="ti-arrow-right" data-bs-toggle="tooltip" title="ti-arrow-right" /></li>
                      <li><i className="ti-arrow-left" data-bs-toggle="tooltip" title="ti-arrow-left" /></li>
                      <li><i className="ti-arrow-down" data-bs-toggle="tooltip" title="ti-arrow-down" /></li>
                      <li><i className="ti-arrows-vertical" data-bs-toggle="tooltip" title="ti-arrows-vertical" /></li>
                      <li><i className="ti-arrows-horizontal" data-bs-toggle="tooltip" title="ti-arrows-horizontal" /></li>
                      <li><i className="ti-angle-up" data-bs-toggle="tooltip" title="ti-angle-up" /></li>
                      <li><i className="ti-angle-right" data-bs-toggle="tooltip" title="ti-angle-right" /></li>
                      <li><i className="ti-angle-left" data-bs-toggle="tooltip" title="ti-angle-left" /></li>
                      <li><i className="ti-angle-down" data-bs-toggle="tooltip" title="ti-angle-down" /></li>
                      <li><i className="ti-angle-double-up" data-bs-toggle="tooltip" title="ti-angle-double-up" /></li>
                      <li><i className="ti-angle-double-right" data-bs-toggle="tooltip" title="ti-angle-double-right" /></li>
                      <li><i className="ti-angle-double-left" data-bs-toggle="tooltip" title="ti-angle-double-left" /></li>
                      <li><i className="ti-angle-double-down" data-bs-toggle="tooltip" title="ti-angle-double-down" /></li>
                      <li><i className="ti-move" data-bs-toggle="tooltip" title="ti-move" /></li>
                      <li><i className="ti-fullscreen" data-bs-toggle="tooltip" title="ti-fullscreen" /></li>
                      <li><i className="ti-arrow-top-right" data-bs-toggle="tooltip" title="ti-arrow-top-right" /></li>
                      <li><i className="ti-arrow-top-left" data-bs-toggle="tooltip" title="ti-arrow-top-left" /></li>
                      <li><i className="ti-arrow-circle-up" data-bs-toggle="tooltip" title="ti-arrow-circle-up" /></li>
                      <li><i className="ti-arrow-circle-right" data-bs-toggle="tooltip" title="ti-arrow-circle-right" /></li>
                      <li><i className="ti-arrow-circle-left" data-bs-toggle="tooltip" title="ti-arrow-circle-left" /></li>
                      <li><i className="ti-arrow-circle-down" data-bs-toggle="tooltip" title="ti-arrow-circle-down" /></li>
                      <li><i className="ti-arrows-corner" data-bs-toggle="tooltip" title="ti-arrows-corner" /></li>
                      <li><i className="ti-split-v" data-bs-toggle="tooltip" title="ti-split-v" /></li>
                      <li><i className="ti-split-v-alt" data-bs-toggle="tooltip" title="ti-split-v-alt" /></li>
                      <li><i className="ti-split-h" data-bs-toggle="tooltip" title="ti-split-h" /></li>
                      <li><i className="ti-hand-point-up" data-bs-toggle="tooltip" title="ti-hand-point-up" /></li>
                      <li><i className="ti-hand-point-right" data-bs-toggle="tooltip" title="ti-hand-point-right" /></li>
                      <li><i className="ti-hand-point-left" data-bs-toggle="tooltip" title="ti-hand-point-left" /></li>
                      <li><i className="ti-hand-point-down" data-bs-toggle="tooltip" title="ti-hand-point-down" /></li>
                      <li><i className="ti-back-right" data-bs-toggle="tooltip" title="ti-back-right" /></li>
                      <li><i className="ti-back-left" data-bs-toggle="tooltip" title="ti-back-left" /></li>
                      <li><i className="ti-exchange-vertical" data-bs-toggle="tooltip" title="ti-exchange-vertical" /></li>
                      <li><i className="ti-wand" data-bs-toggle="tooltip" title="ti-wand" /></li>
                      <li><i className="ti-save" data-bs-toggle="tooltip" title="ti-save" /></li>
                      <li><i className="ti-save-alt" data-bs-toggle="tooltip" title="ti-save-alt" /></li>
                      <li><i className="ti-direction" data-bs-toggle="tooltip" title="ti-direction" /></li>
                      <li><i className="ti-direction-alt" data-bs-toggle="tooltip" title="ti-direction-alt" /></li>
                      <li><i className="ti-user" data-bs-toggle="tooltip" title="ti-user" /></li>
                      <li><i className="ti-link" data-bs-toggle="tooltip" title="ti-link" /></li>
                      <li><i className="ti-unlink" data-bs-toggle="tooltip" title="ti-unlink" /></li>
                      <li><i className="ti-trash" data-bs-toggle="tooltip" title="ti-trash" /></li>
                      <li><i className="ti-target" data-bs-toggle="tooltip" title="ti-target" /></li>
                      <li><i className="ti-tag" data-bs-toggle="tooltip" title="ti-tag" /></li>
                      <li><i className="ti-desktop" data-bs-toggle="tooltip" title="ti-desktop" /></li>
                      <li><i className="ti-tablet" data-bs-toggle="tooltip" title="ti-tablet" /></li>
                      <li><i className="ti-mobile" data-bs-toggle="tooltip" title="ti-mobile" /></li>
                      <li><i className="ti-email" data-bs-toggle="tooltip" title="ti-email" /></li>
                      <li><i className="ti-star" data-bs-toggle="tooltip" title="ti-star" /></li>
                      <li><i className="ti-spray" data-bs-toggle="tooltip" title="ti-spray" /></li>
                      <li><i className="ti-signal" data-bs-toggle="tooltip" title="ti-signal" /></li>
                      <li><i className="ti-shopping-cart" data-bs-toggle="tooltip" title="ti-shopping-cart" /></li>
                      <li><i className="ti-shopping-cart-full" data-bs-toggle="tooltip" title="ti-shopping-cart-full" /></li>
                      <li><i className="ti-settings" data-bs-toggle="tooltip" title="ti-settings" /></li>
                      <li><i className="ti-search" data-bs-toggle="tooltip" title="ti-search" /></li>
                      <li><i className="ti-zoom-in" data-bs-toggle="tooltip" title="ti-zoom-in" /></li>
                      <li><i className="ti-zoom-out" data-bs-toggle="tooltip" title="ti-zoom-out" /></li>
                      <li><i className="ti-cut" data-bs-toggle="tooltip" title="ti-cut" /></li>
                      <li><i className="ti-ruler" data-bs-toggle="tooltip" title="ti-ruler" /></li>
                      <li><i className="ti-ruler-alt-2" data-bs-toggle="tooltip" title="ti-ruler-alt-2" /></li>
                      <li><i className="ti-ruler-pencil" data-bs-toggle="tooltip" title="ti-ruler-pencil" /></li>
                      <li><i className="ti-ruler-alt" data-bs-toggle="tooltip" title="ti-ruler-alt" /></li>
                      <li><i className="ti-bookmark" data-bs-toggle="tooltip" title="ti-bookmark" /></li>
                      <li><i className="ti-bookmark-alt" data-bs-toggle="tooltip" title="ti-bookmark-alt" /></li>
                      <li><i className="ti-reload" data-bs-toggle="tooltip" title="ti-reload" /></li>
                      <li><i className="ti-plus" data-bs-toggle="tooltip" title="ti-plus" /></li>
                      <li><i className="ti-minus" data-bs-toggle="tooltip" title="ti-minus" /></li>
                      <li><i className="ti-close" data-bs-toggle="tooltip" title="ti-close" /></li>
                      <li><i className="ti-pin" data-bs-toggle="tooltip" title="ti-pin" /></li>
                      <li><i className="ti-pencil" data-bs-toggle="tooltip" title="ti-pencil" /></li>
                      <li><i className="ti-pencil-alt" data-bs-toggle="tooltip" title="ti-pencil-alt" /></li>
                      <li><i className="ti-paint-roller" data-bs-toggle="tooltip" title="ti-paint-roller" /></li>
                      <li><i className="ti-paint-bucket" data-bs-toggle="tooltip" title="ti-paint-bucket" /></li>
                      <li><i className="ti-na" data-bs-toggle="tooltip" title="ti-na" /></li>
                      <li><i className="ti-medall" data-bs-toggle="tooltip" title="ti-medall" /></li>
                      <li><i className="ti-medall-alt" data-bs-toggle="tooltip" title="ti-medall-alt" /></li>
                      <li><i className="ti-marker" data-bs-toggle="tooltip" title="ti-marker" /></li>
                      <li><i className="ti-marker-alt" data-bs-toggle="tooltip" title="ti-marker-alt" /></li>
                      <li><i className="ti-lock" data-bs-toggle="tooltip" title="ti-lock" /></li>
                      <li><i className="ti-unlock" data-bs-toggle="tooltip" title="ti-unlock" /></li>
                      <li><i className="ti-location-arrow" data-bs-toggle="tooltip" title="ti-location-arrow" /></li>
                      <li><i className="ti-layout" data-bs-toggle="tooltip" title="ti-layout" /></li>
                      <li><i className="ti-layers" data-bs-toggle="tooltip" title="ti-layers" /></li>
                      <li><i className="ti-layers-alt" data-bs-toggle="tooltip" title="ti-layers-alt" /></li>
                      <li><i className="ti-key" data-bs-toggle="tooltip" title="ti-key" /></li>
                      <li><i className="ti-image" data-bs-toggle="tooltip" title="ti-image" /></li>
                      <li><i className="ti-heart" data-bs-toggle="tooltip" title="ti-heart" /></li>
                      <li><i className="ti-heart-broken" data-bs-toggle="tooltip" title="ti-heart-broken" /></li>
                      <li><i className="ti-hand-stop" data-bs-toggle="tooltip" title="ti-hand-stop" /></li>
                      <li><i className="ti-hand-open" data-bs-toggle="tooltip" title="ti-hand-open" /></li>
                      <li><i className="ti-hand-drag" data-bs-toggle="tooltip" title="ti-hand-drag" /></li>
                      <li><i className="ti-flag" data-bs-toggle="tooltip" title="ti-flag" /></li>
                      <li><i className="ti-flag-alt" data-bs-toggle="tooltip" title="ti-flag-alt" /></li>
                      <li><i className="ti-flag-alt-2" data-bs-toggle="tooltip" title="ti-flag-alt-2" /></li>
                      <li><i className="ti-eye" data-bs-toggle="tooltip" title="ti-eye" /></li>
                      <li><i className="ti-import" data-bs-toggle="tooltip" title="ti-import" /></li>
                      <li><i className="ti-export" data-bs-toggle="tooltip" title="ti-export" /></li>
                      <li><i className="ti-cup" data-bs-toggle="tooltip" title="ti-cup" /></li>
                      <li><i className="ti-crown" data-bs-toggle="tooltip" title="ti-crown" /></li>
                      <li><i className="ti-comments" data-bs-toggle="tooltip" title="ti-comments" /></li>
                      <li><i className="ti-comment" data-bs-toggle="tooltip" title="ti-comment" /></li>
                      <li><i className="ti-comment-alt" data-bs-toggle="tooltip" title="ti-comment-alt" /></li>
                      <li><i className="ti-thought" data-bs-toggle="tooltip" title="ti-thought" /></li>
                      <li><i className="ti-clip" data-bs-toggle="tooltip" title="ti-clip" /></li>
                      <li><i className="ti-check" data-bs-toggle="tooltip" title="ti-check" /></li>
                      <li><i className="ti-check-box" data-bs-toggle="tooltip" title="ti-check-box" /></li>
                      <li><i className="ti-camera" data-bs-toggle="tooltip" title="ti-camera" /></li>
                      <li><i className="ti-announcement" data-bs-toggle="tooltip" title="ti-announcement" /></li>
                      <li><i className="ti-brush" data-bs-toggle="tooltip" title="ti-brush" /></li>
                      <li><i className="ti-brush-alt" data-bs-toggle="tooltip" title="ti-brush-alt" /></li>
                      <li><i className="ti-palette" data-bs-toggle="tooltip" title="ti-palette" /></li>
                      <li><i className="ti-briefcase" data-bs-toggle="tooltip" title="ti-briefcase" /></li>
                      <li><i className="ti-bolt" data-bs-toggle="tooltip" title="ti-bolt" /></li>
                      <li><i className="ti-bolt-alt" data-bs-toggle="tooltip" title="ti-bolt-alt" /></li>
                      <li><i className="ti-blackboard" data-bs-toggle="tooltip" title="ti-blackboard" /></li>
                      <li><i className="ti-bag" data-bs-toggle="tooltip" title="ti-bag" /></li>
                      <li><i className="ti-world" data-bs-toggle="tooltip" title="ti-world" /></li>
                      <li><i className="ti-wheelchair" data-bs-toggle="tooltip" title="ti-wheelchair" /></li>
                      <li><i className="ti-car" data-bs-toggle="tooltip" title="ti-car" /></li>
                      <li><i className="ti-truck" data-bs-toggle="tooltip" title="ti-truck" /></li>
                      <li><i className="ti-timer" data-bs-toggle="tooltip" title="ti-timer" /></li>
                      <li><i className="ti-ticket" data-bs-toggle="tooltip" title="ti-ticket" /></li>
                      <li><i className="ti-thumb-up" data-bs-toggle="tooltip" title="ti-thumb-up" /></li>
                      <li><i className="ti-thumb-down" data-bs-toggle="tooltip" title="ti-thumb-down" /></li>
                      <li><i className="ti-stats-up" data-bs-toggle="tooltip" title="ti-stats-up" /></li>
                      <li><i className="ti-stats-down" data-bs-toggle="tooltip" title="ti-stats-down" /></li>
                      <li><i className="ti-shine" data-bs-toggle="tooltip" title="ti-shine" /></li>
                      <li><i className="ti-shift-right" data-bs-toggle="tooltip" title="ti-shift-right" /></li>
                      <li><i className="ti-shift-left" data-bs-toggle="tooltip" title="ti-shift-left" /></li>
                      <li><i className="ti-shift-right-alt" data-bs-toggle="tooltip" title="ti-shift-right-alt" /></li>
                      <li><i className="ti-shift-left-alt" data-bs-toggle="tooltip" title="ti-shift-left-alt" /></li>
                      <li><i className="ti-shield" data-bs-toggle="tooltip" title="ti-shield" /></li>
                      <li><i className="ti-notepad" data-bs-toggle="tooltip" title="ti-notepad" /></li>
                      <li><i className="ti-server" data-bs-toggle="tooltip" title="ti-server" /></li>
                      <li><i className="ti-pulse" data-bs-toggle="tooltip" title="ti-pulse" /></li>
                      <li><i className="ti-printer" data-bs-toggle="tooltip" title="ti-printer" /></li>
                      <li><i className="ti-power-off" data-bs-toggle="tooltip" title="ti-power-off" /></li>
                      <li><i className="ti-plug" data-bs-toggle="tooltip" title="ti-plug" /></li>
                      <li><i className="ti-pie-chart" data-bs-toggle="tooltip" title="ti-pie-chart" /></li>
                      <li><i className="ti-panel" data-bs-toggle="tooltip" title="ti-panel" /></li>
                      <li><i className="ti-package" data-bs-toggle="tooltip" title="ti-package" /></li>
                      <li><i className="ti-music" data-bs-toggle="tooltip" title="ti-music" /></li>
                      <li><i className="ti-music-alt" data-bs-toggle="tooltip" title="ti-music-alt" /></li>
                      <li><i className="ti-mouse" data-bs-toggle="tooltip" title="ti-mouse" /></li>
                      <li><i className="ti-mouse-alt" data-bs-toggle="tooltip" title="ti-mouse-alt" /></li>
                      <li><i className="ti-money" data-bs-toggle="tooltip" title="ti-money" /></li>
                      <li><i className="ti-microphone" data-bs-toggle="tooltip" title="ti-microphone" /></li>
                      <li><i className="ti-menu" data-bs-toggle="tooltip" title="ti-menu" /></li>
                      <li><i className="ti-menu-alt" data-bs-toggle="tooltip" title="ti-menu-alt" /></li>
                      <li><i className="ti-map" data-bs-toggle="tooltip" title="ti-map" /></li>
                      <li><i className="ti-map-alt" data-bs-toggle="tooltip" title="ti-map-alt" /></li>
                      <li><i className="ti-location-pin" data-bs-toggle="tooltip" title="ti-location-pin" /></li>
                      <li><i className="ti-light-bulb" data-bs-toggle="tooltip" title="ti-light-bulb" /></li>
                      <li><i className="ti-info" data-bs-toggle="tooltip" title="ti-info" /></li>
                      <li><i className="ti-infinite" data-bs-toggle="tooltip" title="ti-infinite" /></li>
                      <li><i className="ti-id-badge" data-bs-toggle="tooltip" title="ti-id-badge" /></li>
                      <li><i className="ti-hummer" data-bs-toggle="tooltip" title="ti-hummer" /></li>
                      <li><i className="ti-home" data-bs-toggle="tooltip" title="ti-home" /></li>
                      <li><i className="ti-help" data-bs-toggle="tooltip" title="ti-help" /></li>
                      <li><i className="ti-headphone" data-bs-toggle="tooltip" title="ti-headphone" /></li>
                      <li><i className="ti-harddrives" data-bs-toggle="tooltip" title="ti-harddrives" /></li>
                      <li><i className="ti-harddrive" data-bs-toggle="tooltip" title="ti-harddrive" /></li>
                      <li><i className="ti-gift" data-bs-toggle="tooltip" title="ti-gift" /></li>
                      <li><i className="ti-game" data-bs-toggle="tooltip" title="ti-game" /></li>
                      <li><i className="ti-filter" data-bs-toggle="tooltip" title="ti-filter" /></li>
                      <li><i className="ti-files" data-bs-toggle="tooltip" title="ti-files" /></li>
                      <li><i className="ti-file" data-bs-toggle="tooltip" title="ti-file" /></li>
                      <li><i className="ti-zip" data-bs-toggle="tooltip" title="ti-zip" /></li>
                      <li><i className="ti-folder" data-bs-toggle="tooltip" title="ti-folder" /></li>
                      <li><i className="ti-envelope" data-bs-toggle="tooltip" title="ti-envelope" /></li>
                      <li><i className="ti-dashboard" data-bs-toggle="tooltip" title="ti-dashboard" /></li>
                      <li><i className="ti-cloud" data-bs-toggle="tooltip" title="ti-cloud" /></li>
                      <li><i className="ti-cloud-up" data-bs-toggle="tooltip" title="ti-cloud-up" /></li>
                      <li><i className="ti-cloud-down" data-bs-toggle="tooltip" title="ti-cloud-down" /></li>
                      <li><i className="ti-clipboard" data-bs-toggle="tooltip" title="ti-clipboard" /></li>
                      <li><i className="ti-calendar" data-bs-toggle="tooltip" title="ti-calendar" /></li>
                      <li><i className="ti-book" data-bs-toggle="tooltip" title="ti-book" /></li>
                      <li><i className="ti-bell" data-bs-toggle="tooltip" title="ti-bell" /></li>
                      <li><i className="ti-basketball" data-bs-toggle="tooltip" title="ti-basketball" /></li>
                      <li><i className="ti-bar-chart" data-bs-toggle="tooltip" title="ti-bar-chart" /></li>
                      <li><i className="ti-bar-chart-alt" data-bs-toggle="tooltip" title="ti-bar-chart-alt" /></li>
                      <li><i className="ti-archive" data-bs-toggle="tooltip" title="ti-archive" /></li>
                      <li><i className="ti-anchor" data-bs-toggle="tooltip" title="ti-anchor" /></li>
                      <li><i className="ti-alert" data-bs-toggle="tooltip" title="ti-alert" /></li>
                      <li><i className="ti-alarm-clock" data-bs-toggle="tooltip" title="ti-alarm-clock" /></li>
                      <li><i className="ti-agenda" data-bs-toggle="tooltip" title="ti-agenda" /></li>
                      <li><i className="ti-write" data-bs-toggle="tooltip" title="ti-write" /></li>
                      <li><i className="ti-wallet" data-bs-toggle="tooltip" title="ti-wallet" /></li>
                      <li><i className="ti-video-clapper" data-bs-toggle="tooltip" title="ti-video-clapper" /></li>
                      <li><i className="ti-video-camera" data-bs-toggle="tooltip" title="ti-video-camera" /></li>
                      <li><i className="ti-vector" data-bs-toggle="tooltip" title="ti-vector" /></li>
                      <li><i className="ti-support" data-bs-toggle="tooltip" title="ti-support" /></li>
                      <li><i className="ti-stamp" data-bs-toggle="tooltip" title="ti-stamp" /></li>
                      <li><i className="ti-slice" data-bs-toggle="tooltip" title="ti-slice" /></li>
                      <li><i className="ti-shortcode" data-bs-toggle="tooltip" title="ti-shortcode" /></li>
                      <li><i className="ti-receipt" data-bs-toggle="tooltip" title="ti-receipt" /></li>
                      <li><i className="ti-pin2" data-bs-toggle="tooltip" title="ti-pin2" /></li>
                      <li><i className="ti-pin-alt" data-bs-toggle="tooltip" title="ti-pin-alt" /></li>
                      <li><i className="ti-pencil-alt2" data-bs-toggle="tooltip" title="ti-pencil-alt2" /></li>
                      <li><i className="ti-eraser" data-bs-toggle="tooltip" title="ti-eraser" /></li>
                      <li><i className="ti-more" data-bs-toggle="tooltip" title="ti-more" /></li>
                      <li><i className="ti-more-alt" data-bs-toggle="tooltip" title="ti-more-alt" /></li>
                      <li><i className="ti-microphone-alt" data-bs-toggle="tooltip" title="ti-microphone-alt" /></li>
                      <li><i className="ti-magnet" data-bs-toggle="tooltip" title="ti-magnet" /></li>
                      <li><i className="ti-line-double" data-bs-toggle="tooltip" title="ti-line-double" /></li>
                      <li><i className="ti-line-dotted" data-bs-toggle="tooltip" title="ti-line-dotted" /></li>
                      <li><i className="ti-line-dashed" data-bs-toggle="tooltip" title="ti-line-dashed" /></li>
                      <li><i className="ti-ink-pen" data-bs-toggle="tooltip" title="ti-ink-pen" /></li>
                      <li><i className="ti-info-alt" data-bs-toggle="tooltip" title="ti-info-alt" /></li>
                      <li><i className="ti-help-alt" data-bs-toggle="tooltip" title="ti-help-alt" /></li>
                      <li><i className="ti-headphone-alt" data-bs-toggle="tooltip" title="ti-headphone-alt" /></li>
                      <li><i className="ti-gallery" data-bs-toggle="tooltip" title="ti-gallery" /></li>
                      <li><i className="ti-face-smile" data-bs-toggle="tooltip" title="ti-face-smile" /></li>
                      <li><i className="ti-face-sad" data-bs-toggle="tooltip" title="ti-face-sad" /></li>
                      <li><i className="ti-credit-card" data-bs-toggle="tooltip" title="ti-credit-card" /></li>
                      <li><i className="ti-comments-smiley" data-bs-toggle="tooltip" title="ti-comments-smiley" /></li>
                      <li><i className="ti-time" data-bs-toggle="tooltip" title="ti-time" /></li>
                      <li><i className="ti-share" data-bs-toggle="tooltip" title="ti-share" /></li>
                      <li><i className="ti-share-alt" data-bs-toggle="tooltip" title="ti-share-alt" /></li>
                      <li><i className="ti-rocket" data-bs-toggle="tooltip" title="ti-rocket" /></li>
                      <li><i className="ti-new-window" data-bs-toggle="tooltip" title="ti-new-window" /></li>
                      <li><i className="ti-rss" data-bs-toggle="tooltip" title="ti-rss" /></li>
                      <li><i className="ti-rss-alt" data-bs-toggle="tooltip" title="ti-rss-alt" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
          </div>
        </div>			
      </div>
    </div>
  )
}

export default ThemifyIcons