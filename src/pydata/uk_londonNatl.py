import infoCrawler

url = 'https://www.nationalgallery.org.uk/exhibitions'
titles_selector = ".exhibition-title"
dates_selector = ".exhibition-date"

infoCrawler.print_msm_data(url, titles_selector, dates_selector)