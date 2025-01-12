import { styled } from '@mui/material/styles';

import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import IconButton from '@mui/material/IconButton';

const StyledIconButton = styled(IconButton)<{ position: 'left' | 'right' }>(({ theme, position }) => ({
	height: 40,
	position: 'absolute',
	zIndex: 99,
	top: 12,
	width: 24,
	borderRadius: 38,
	padding: 8,
	backgroundColor: theme.palette.background.paper,
	transition: theme.transitions.create(['background-color', 'border-radius', 'width', 'min-width', 'padding'], {
		easing: theme.transitions.easing.easeInOut,
		duration: theme.transitions.duration.shorter
	}),
	'&:hover': {
		width: 52,
		paddingLeft: 8,
		paddingRight: 8
	},

	'& > .button-icon': {
		fontSize: 18,
		transition: theme.transitions.create(['transform'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.short
		})
	},

	...(position === 'left' && {
		borderBottomLeftRadius: 0,
		borderTopLeftRadius: 0,
		paddingLeft: 4,
		left: 0
	}),

	...(position === 'right' && {
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
		paddingRight: 4,
		right: 0,
		'& > .button-icon': {
			transform: 'rotate(-180deg)'
		}
	})
}));

type NavbarToggleFabProps = {
	className?: string;
	position?: string;
	onClick?: () => void;
};

/**
 * The NavbarToggleFab component.
 */
function NavbarToggleFab(props: NavbarToggleFabProps) {
	const { className = '', position = 'left', onClick } = props;

	return (
		<Tooltip
			title="Show Navigation"
			placement={position === 'left' ? 'right' : 'left'}
		>
			<StyledIconButton
				position={position as 'left' | 'right'}
				className={clsx(className)}
				onClick={onClick}
			>
				<FuseSvgIcon className="button-icon">heroicons-outline:view-list</FuseSvgIcon>
			</StyledIconButton>
		</Tooltip>
	);
}

NavbarToggleFab.defaultProps = {};

export default NavbarToggleFab;
