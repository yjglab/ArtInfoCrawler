import infoCrawler

url = 'https://www.cincinnatiartmuseum.org/art/exhibitions/?gclid=Cj0KCQjw3v6SBhCsARIsACyrRAlU8C9ymrvNSV-ts7ZSz3C6QGU7ctlrzUOwSSRAMgeCD2Po5DSI7L0aAsxFEALw_wcB'
titles_selector = ".col-sm-8 h4"
dates_selector = ".col-sm-8 h5"

infoCrawler.print_msm_data(url, titles_selector, dates_selector)
