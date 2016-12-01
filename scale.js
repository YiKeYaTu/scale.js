;(function () {
    var head = document.head
    var contentWidth = null
    var viewport = null
    Array.prototype.slice.call(head.children).forEach(function(item) {
        if(item.name === 'viewport') 
            item.parentNode.removeChild(item)
        if (item.getAttribute('data-name') === 'scale')
            contentWidth = parseFloat(item.getAttribute('data-content-width'))
    })

    if (!viewport)
        console.warn('请通过<meta data-name="scale" data-content-width="xx">设置你的基准px值')

    checkScale()

    window.addEventListener('resize', () => {
        checkScale()
    })

    function createViewport(scale) {
        var meta = document.createElement('meta')
        meta.name = 'viewport'
        meta.content = createViewportContent(scale || 1)
        if (viewport)
            viewport.parentNode.removeChild(viewport)
        viewport = meta
        return meta
    }

    function createViewportContent(scale) {
        return 'width=device-width,\
            initial-scale=' + scale + ', \
            minimum-scale=' + scale + ', \
            maximum-scale=' + scale + ', \
            user-scalable=no'
    }

    function checkScale() {
        head.appendChild(createViewport(screen.availWidth / (contentWidth || 640)))
    }
}());