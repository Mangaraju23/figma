export interface ModalConfig {
    modalType?: string
    modalTitle?: string
    titleSection?: {
        title?: string,
        titileIcon?: string,
        titleClose?: boolean
    },
    dismissButtonLabel?: string
    closeButtonLabel?: string
    // shouldClose?(): Promise<boolean> | boolean
    // shouldDismiss?(): Promise<boolean> | boolean
    // onClose?(): Promise<boolean> | boolean
    // onDismiss?(): Promise<boolean> | boolean
    disableCloseButton?(): boolean
    // disableDismissButton?(): boolean
    hideCloseButton?(): boolean
    // hideDismissButton?(): boolean
}
